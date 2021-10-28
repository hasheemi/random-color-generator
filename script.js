let button = document.getElementById("start");
let con = document.getElementById("contain");
button.addEventListener("click", function () {
  con.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    let r = Math.round(Math.random() * 255 + 1);
    let g = Math.round(Math.random() * 255 + 1);
    let b = Math.round(Math.random() * 255 + 1);
    let rgb = "rgb(" + r + ", " + g + ", " + b + ")";
    let hex = rgbToHex(r, g, b);
    function componentToHex(c) {
      var hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    // console.log(hex);
    // console.log(rgb);
    con.innerHTML +=
      `
      <div class="box">
        <div class="warna" style="background-color: ` +
      rgb +
      `;"></div>
        <div class="hasil">
          <div class="rgb">RGB =` +
      rgb +
      `</div>
          <div class="hex">HEX = ` +
      hex +
      `</div>
        </div>
      </div>
    `;
  }
});

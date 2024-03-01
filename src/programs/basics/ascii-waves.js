fetch(
  "https://raw.githubusercontent.com/blindman67/SimplexNoiseJS/master/simplexNoise.js"
)
  .then((e) => e.text())
  .then((e) => {
    const openSimplexNoise = new Function("return " + e)();
    noise3D = openSimplexNoise(Date.now()).noise3D;
  });

// Stub function
function noise3D() {
  return 0;
}

// const density = "THEO DAGUIER";
const density = "Ñ@#W$9876543210?!abcxyz;:+=-,._ ";

export function main(coord, context, cursor, buffer) {
  // const t = context.time * 0.0007;
  const t = context.time * 0.00001;
  // const s = 0.09;
  const s = 0.03;
  const x = coord.x * s;
  const y = (coord.y * s) / context.metrics.aspect + t;
  const i = Math.floor((noise3D(x, y, t) * 0.5 + 0.5) * density.length);

  return density[i];
}

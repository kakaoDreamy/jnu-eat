const WALK_SPEED = 0.25;
const CONVERT_MINUTE = 60;

function degreesToRadians(degrees) {
  const radians = (degrees * Math.PI) / 180;
  return radians;
}
function computeDistance(ax, ay, zx, zy) {
  const startLatRads = degreesToRadians(ax);
  const startLongRads = degreesToRadians(ay);
  const destLatRads = degreesToRadians(zx);
  const destLongRads = degreesToRadians(zy);
  const Radius = 6371; // 지구의 반경(km)
  const distance =
    Math.acos(
      Math.sin(startLatRads) * Math.sin(destLatRads) +
        Math.cos(startLatRads) *
          Math.cos(destLatRads) *
          Math.cos(startLongRads - destLongRads),
    ) * Radius;

  return Math.round(distance * WALK_SPEED * CONVERT_MINUTE);
}

export { degreesToRadians, computeDistance };

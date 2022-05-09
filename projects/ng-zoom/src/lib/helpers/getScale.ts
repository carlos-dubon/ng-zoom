const getScale = (
  width: number,
  height: number,
  maxWidth: number,
  maxHeight: number
): number => {
  const widthScale = maxWidth / width;
  const heightScale = maxHeight / height;

  const widthScaleIsOkay = height * widthScale <= maxHeight;

  return widthScaleIsOkay ? widthScale : heightScale;
};

export { getScale };

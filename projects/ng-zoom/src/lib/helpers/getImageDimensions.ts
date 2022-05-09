import { sumStyleDeclarationValues } from './sumStyleDeclarationValues';

/**
 *
 * @param DOMRect
 * @param styleDeclaration
 * @returns `[width, height]`
 */
const getImageDimensions = (
  DOMRect: DOMRect,
  styleDeclaration: CSSStyleDeclaration
): [number, number] => {
  const imageWidth: number =
    DOMRect.width -
    sumStyleDeclarationValues(
      styleDeclaration,
      'borderLeftWidth',
      'borderRightWidth',
      'paddingLeft',
      'paddingRight'
    );

  const imageHeight: number =
    DOMRect.height -
    sumStyleDeclarationValues(
      styleDeclaration,
      'borderTopWidth',
      'borderBottomWidth',
      'paddingTop',
      'paddingBottom'
    );

  return [imageWidth, imageHeight];
};

export { getImageDimensions };

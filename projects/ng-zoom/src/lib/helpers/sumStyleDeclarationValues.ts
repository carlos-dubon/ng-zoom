const sumStyleDeclarationValues = (
  styleDeclaration: CSSStyleDeclaration,
  ...properties: string[]
): number => {
  return properties.reduce((acc: number, property: string) => {
    return acc + (parseFloat(styleDeclaration.getPropertyValue(property)) || 0);
  }, 0);
};

export { sumStyleDeclarationValues };

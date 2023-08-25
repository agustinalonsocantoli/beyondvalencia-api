export const transformToSlug = (
    text: string,
  ): string => {
    if (!text) return "";
  
    let textFormatted = text
      ?.toLocaleLowerCase()
      .replaceAll(" ", "-")
      .replaceAll("/", "-")
      .replaceAll(/[.,¿?!¡]/gm, "")
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "");
  
    if (textFormatted.includes("-+")) {
      return textFormatted.replaceAll("-+", "-plus");
    } else if (textFormatted.includes("-+-")) {
      return textFormatted.replaceAll("-+-", "-plus-");
    } else if (textFormatted.includes("+")) {
      return textFormatted.replaceAll("+", "-plus-");
    }
  
    return textFormatted;
  };
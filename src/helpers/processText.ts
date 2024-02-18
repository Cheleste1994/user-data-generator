const seedrandom = (seed: number) => {
  let state = seed;

  return function random() {
    state = (state * 9301 + 49297) % 233280;
    return state / 233280;
  };
};

export const processText = (
  text: string,
  errors: number,
  initialText: string
) => {
  const errorTypes = ['delete', 'add', 'swap'];

  const random = seedrandom(errors);

  const probabilityErrors =
    (errors % 1) * 10 === 5
      ? Math.round(errors + random())
      : Math.round(errors);

  for (let i = 0; i < probabilityErrors; i += 1) {
    let errorType = errorTypes[Math.floor(random() * errorTypes.length)];
    const index = Math.floor(random() * text.length);

    if (initialText.length / 2 > text.length) {
      errorType = ['add', 'swap'][Math.floor(random() * 2)];
    } else if (initialText.length * 1.3 < text.length) {
      errorType = ['delete', 'swap'][Math.floor(random() * 2)];
    }

    switch (errorType) {
      case 'delete':
        text = text.slice(0, index) + text.slice(index + 1);
        break;
      case 'add':
        const char = String.fromCharCode(Math.floor(random() * 26) + 97);
        text = text.slice(0, index) + char + text.slice(index);
        break;
      case 'swap':
        if (index < text.length - 1) {
          text =
            text.slice(0, index) +
            text[index + 1] +
            text[index] +
            text.slice(index + 2);
        }
        break;
      default:
        break;
    }
  }

  return text;
};

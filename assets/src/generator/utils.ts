import {
  allowedTwoByteCharacters,
  allowedSingleByteCharacters,
} from './allowedCharacters';

export const padLeft = (str: string, len: number, pad: string) => {
  while (str.length < len) {
    str = pad + str;
  }

  return str;
};

export const getLength = (str: string) => {
  if (!str || str === '') {
    return 0;
  }

  let len: number = 0;
  for (let i = 0; i < str.length; ++i) {
    const c = str[i];

    if (allowedTwoByteCharacters.includes(c)) {
      len += 2;
    }
    if (allowedSingleByteCharacters.includes(c)) {
      len += 1;
    }
  }

  return len;
};

export const isEmpty = (str: string) =>
  str == undefined || str == null || str.length == 0;

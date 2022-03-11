import { isValid } from './valid';
import { FormatDate } from './format';
import CryptoJs from 'crypto-js';

const addDays = (date: any, days: number) => {
  if (typeof date === 'undefined' || date === null) {
    date = new Date();
  }

  let result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const encrypt = (input: string, secret: string) => {
  const key = CryptoJs.enc.Utf8.parse(secret);
  const iv1 = CryptoJs.enc.Utf8.parse(secret);
  const encrypted = CryptoJs.AES.encrypt(input, key, {
    keySize: 16,
    iv: iv1,
    mode: CryptoJs.mode.ECB,
    padding: CryptoJs.pad.Pkcs7,
  });
  return encrypted;
};

export { addDays, encrypt };

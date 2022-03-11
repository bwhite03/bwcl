import { addDays, encrypt } from './utils';
import { formatDate } from './format';
const _encrypt = '!@Teams5!@';

describe('addDays', () => {
  test('should add days', () => {
    const newDate = addDays('1/1/2022', 5);
    expect(formatDate(newDate.toString())).toEqual('1/6/2022');
  });

  test('should handle null', () => {
    const newDate = addDays(null, 5);

    const futureDate = addDays(new Date(), 5);
    expect(formatDate(newDate)).toEqual(formatDate(futureDate));
  });
});

describe('encrypt', () => {
  test('should encrypt a string', () => {
    const encryptedString = encrypt('my magic string', _encrypt);
    console.log(encryptedString);
    expect(encryptedString.toString()).toEqual('DGhqo8fuKC4jZSsa9t5HUQ==');
  });
});

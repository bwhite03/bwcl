import { render } from '@testing-library/react';

import { generateToastId, getToastContainerPosition } from './fns';

describe('fns', () => {
  test('should generate a test id', () => {
    const id = generateToastId();
    expect(id.length > 0).toBeTruthy();
  });

  test('should get top-right position', () => {
    const pos = getToastContainerPosition('top-right');
    expect(pos).toEqual(
      'position: fixed; top: 10px; right: 10px; z-index: 9999'
    );
  });

  test('should get top-center position', () => {
    const pos = getToastContainerPosition('top-center');
    expect(pos).toEqual('position: fixed; top: 10px; left: 50%; z-index: 9999');
  });

  test('should get top-left position', () => {
    const pos = getToastContainerPosition('top-left');
    expect(pos).toEqual(
      'position: fixed; top: 10px; left: 10px; z-index: 9999'
    );
  });

  test('should get bottom-right position', () => {
    const pos = getToastContainerPosition('bottom-right');
    expect(pos).toEqual(
      'position: fixed; bottom: 10px; right: 10px; z-index: 9999'
    );
  });

  test('should get bottom-left position', () => {
    const pos = getToastContainerPosition('bottom-left');
    expect(pos).toEqual(
      'position: fixed; bottom: 10px; left: 10px; z-index: 9999'
    );
  });

  test('should get bottom-center position', () => {
    const pos = getToastContainerPosition('bottom-center');
    expect(pos).toEqual(
      'position: fixed; bottom: 10px; left: 50%; z-index: 9999'
    );
  });

  test('should get default position', () => {
    // @ts-ignore
    const pos = getToastContainerPosition('');
    expect(pos).toEqual(
      'position: fixed; top: 10px; right: 10px; z-index: 9999'
    );
  });
});

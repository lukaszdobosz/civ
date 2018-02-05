
export namespace GlobalListenersAction {
  export const SET_PRESSED_KEY_CODE = 'globalListeners/SET_PRESSED_KEY_CODE';
  export const CLEAR_PRESSED_KEY_CODE = 'globalListeners/CLEAR_PRESSED_KEY_CODE';

  export const setPressedKeyCode = (keyCode: string) => ({
    type: SET_PRESSED_KEY_CODE,
    keyCode
  });

  export const clearPressedKeyCode = (keyCode) => ({
    type: CLEAR_PRESSED_KEY_CODE,
    keyCode
  });

}

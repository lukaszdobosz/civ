
import { createSelector } from 'reselect';

export namespace GlobalListenersSelector {
  export const selectDomain = (state) => state.globalListeners;

  export const selectPressedKeysCode = createSelector(
    selectDomain,
    domain => domain && domain.pressedKeysCode
  );

  export const selectIsKeyPressed = (keyCode: string) => createSelector(
    selectPressedKeysCode,
    pressedKeysCode => pressedKeysCode && pressedKeysCode.includes(keyCode)
  )
}
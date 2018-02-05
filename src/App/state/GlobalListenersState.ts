
import { List } from 'immutable';

export namespace GlobalListenersState {

  export type PressedKeysCode = List<string>;

  export type Type = {
    pressedKeysCode: PressedKeysCode,
  };

  export const Initial: Type = {
    pressedKeysCode: List([])
  };
}
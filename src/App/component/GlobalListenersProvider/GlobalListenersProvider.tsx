import * as React from 'react';
import { connect } from 'react-redux';
import { GlobalListenersAction } from 'App/action';
import { GlobalListenersSelector } from 'App/selector';
import { MapAction } from 'Map/action';

type StateProps = {
  isControlPressed: boolean;
};

type DispatchProps = {
  setPressedKeyCode: (keyCode: string) => void;
  clearPressedKeyCode: (keyCode: string) => void;
  setZoom: (deltaY: number) => void;
};

type Props = StateProps & DispatchProps & {};

const mapStateToProps = (state): StateProps => ({
  isControlPressed: GlobalListenersSelector.selectIsKeyPressed('Control')(state)
});

const mapDispatchToProps = (dispatch): DispatchProps => ({
  setPressedKeyCode: (keyCode: string) => dispatch(GlobalListenersAction.setPressedKeyCode(keyCode)),
  clearPressedKeyCode: (keyCode: string) => dispatch(GlobalListenersAction.clearPressedKeyCode(keyCode)),
  setZoom: (deltaY: number) => dispatch(MapAction.setZoom(deltaY))
});

class GlobalListenersProviderPure extends React.Component<Props> {

  componentWillMount() {
    window.addEventListener('wheel', (ev) => this.handleWheel(ev));

    window.addEventListener('keydown', (ev) => this.handleKeyDown(ev) );
    window.addEventListener('keyup', (ev) => this.handleKeyUp(ev) );
  }

  render() {
    return this.props.children;
  }

  handleKeyDown(ev: KeyboardEvent) {
    this.props.setPressedKeyCode(ev.key);
  }

  handleKeyUp(ev: KeyboardEvent) {
    this.props.clearPressedKeyCode(ev.key);
  }

  handleWheel(ev: WheelEvent) {
    this.handleZoom(ev);
  }

  handleZoom(ev) {
    ev.preventDefault();

    this.props.setZoom(ev.deltaY);
  }
}

export const GlobalListenersProvider = connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalListenersProviderPure);
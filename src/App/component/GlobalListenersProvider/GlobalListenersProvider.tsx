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
  setPan: (x: number, y: number) => void;
};

type Props = StateProps & DispatchProps & {};

type State = {
  drag: boolean,
  dragStartX: number,
  dragStartY: number,
}

const mapStateToProps = (state): StateProps => ({
  isControlPressed: GlobalListenersSelector.selectIsKeyPressed('Control')(state)
});

const mapDispatchToProps = (dispatch): DispatchProps => ({
  setPressedKeyCode: (keyCode: string) => dispatch(GlobalListenersAction.setPressedKeyCode(keyCode)),
  clearPressedKeyCode: (keyCode: string) => dispatch(GlobalListenersAction.clearPressedKeyCode(keyCode)),
  setZoom: (deltaY: number) => dispatch(MapAction.setZoom(deltaY)),
  setPan: (x: number, y: number) => dispatch(MapAction.setPan(x, y))
});

class GlobalListenersProviderPure extends React.Component<Props, State> {

  constructor(props) {
    super(props);

    this.state = {
      drag: false,
      dragStartX: null,
      dragStartY: null,
    }
  }

  componentDidMount() {
    window.addEventListener('wheel', (ev) => this.handleWheel(ev));

    window.addEventListener('keydown', (ev) => this.handleKeyDown(ev) );
    window.addEventListener('keyup', (ev) => this.handleKeyUp(ev) );

    window.addEventListener('mousedown', (ev) => this.handleMouseDown(ev) );
    window.addEventListener('mousemove', (ev) => this.handleMouseMove(ev) );
    window.addEventListener('mouseup', (ev) => this.handleMouseUp(ev) );
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

  handleMouseDown(ev) {
    this.setState({
      drag: true,
      dragStartX: ev.clientX,
      dragStartY: ev.clientY,
    });
  }

  handleMouseMove(ev) {
    if (!this.state.drag) {
      return;
    }

    this.props.setPan(
      ev.clientX - this.state.dragStartX,
      ev.clientY - this.state.dragStartY
    );

    this.setState({
      dragStartX: ev.clientX,
      dragStartY: ev.clientY,
    });
  }

  handleMouseUp(ev) {
    this.setState({ drag: false });
  }
}

export const GlobalListenersProvider = connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalListenersProviderPure);
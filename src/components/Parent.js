import React, {Component} from 'react';
import Modal from './Modal';
import Child from './Child';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      clicks: state.clicks + 1,
    }));
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Количество кликов: {this.state.clicks}</p>
        <p>
          Откройте DevTools браузера,
          чтобы убедиться, что кнопка
          не является потомком блока div
          c обработчиком onClick.
        </p>
        <Modal>
          <Child/>
        </Modal>
      </div>
    );
  }
}

export default Parent;
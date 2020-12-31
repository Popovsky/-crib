import React, {Component} from 'react';

class Comp extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.name[0] !== this.props.name[0];
  }

  render() {
    console.log('Component');
    return (
      <div>
        Component {this.props.name[0]}
      </div>
    );
  }
}

export default Comp;
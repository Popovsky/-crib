import React, {PureComponent} from 'react';

class PureComp extends PureComponent {
  render() {
    console.log('PureComponent');
    return (
      <div>
        PureComponent {this.props.name[0]}
      </div>
    );
  }
}

export default PureComp;
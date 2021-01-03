import React, {PureComponent} from 'react';

class PureComp extends PureComponent {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.myRef.current = this.props.name;
  }

  render() {
    console.log('PureComponent');
    return (
      <div>
        PureComponent {this.props.name} {this.myRef.current}
      </div>
    );
  }
}

export default PureComp;
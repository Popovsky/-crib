import React, {Component} from 'react';
import Comp from './Comp';
import PureComp from './PureComp';

class ParentComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ['Name'],
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({name: ['Name'.concat(Math.floor(Math.random() * 3))]});
    }, 2000);
  }

  render() {
    console.log('**********************ParentComponent**********************');
    return (
      <div>
        <Comp name={this.state.name}/>
        <PureComp name={this.state.name}/>
      </div>
    );
  }
}

export default ParentComp;
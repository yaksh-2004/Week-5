import React, { PureComponent } from 'react';

export class Purecomponent extends PureComponent {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export const Demo = () => {
  const title = 'Welcome to my App';
  const text = 'Sample Data';
  return (
    <div>
      <Purecomponent title={title} text={text} />
    </div>
  );
};

export default Purecomponent;
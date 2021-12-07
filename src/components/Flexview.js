import React from 'react';
import FlexView from 'react-flexview';

export default class Component extends React.Component {
  render() {
    return (
      <FlexView vAlignContent='center'>
        I'm vertically centered!
      </FlexView>
    );
  }
}
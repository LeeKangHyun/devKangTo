import React from 'react';

import Controller from './Controller';
import {
  Wrap
} from './styled';

const Pet = ({
  getPost: {
    list
  },
}) => {
  return (
    <Wrap>
      {list.length > 0 && list.map((item, index) => {
        return (
          <div key={index}>
            {item}
          </div>
        )
      })}
    </Wrap>
  )
};

export default Controller(Pet);
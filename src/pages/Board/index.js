import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
  Button,
  Wrap,
  Tbody,
} from './styled';
import C from './Controller';

const BoardPage = ({board, submit,}) => {
  return (
    <div>
      <Wrap>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>날짜</th>
          </tr>
        </thead>
        <Tbody>
          {
            0 < board.length && board.map((item, index) => {
              console.log(item);
              return (
                <tr key={item.uid}>
                  <td>{index + 1}</td>
                  <td>{item.title || ''}</td>
                  <td>{moment.unix(item.created || (Date.now()/1000)).format('YYYY-MM-DD a' +
                    ' h:mm:ss')}</td>
                </tr>
              )
            })
          }
        </Tbody>
      </Wrap>
      
      <Button onClick={submit.bind(this, {'answer': '상훈이 바보'})}>
        전송
      </Button>
    </div>
  )
};

BoardPage.propTypes = {
  board: PropTypes.array,
  submit: PropTypes.func,
};

export default C(BoardPage);
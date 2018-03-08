import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
  Wrap,
  Input,
  Button,
  SearchWrap,
  Tbody,
} from './styled';
import C from './Controller';

const BoardPage = ({
  board, keyword, 
  onSubmit, onChangeToState
}) => {
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
          {0 < board.length && board.map((item, key) => {
            const date = item.created ? moment.unix(item.created) : moment();
            return (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{item.title || ''}</td>
                <td>{date.format('YYYY-MM-DD a h:mm:ss')}</td>
              </tr>
            )
          })}
        </Tbody>
      </Wrap>

      <SearchWrap className="Clearfix" onSubmit={onSubmit}>
        <Input name="keyword" value={keyword} onChange={onChangeToState} />
        <Button type="submit">
          검색
        </Button>
      </SearchWrap>
    </div>
  )
};

BoardPage.propTypes = {
  board: PropTypes.array,
  submit: PropTypes.func,
};

export default C(BoardPage);
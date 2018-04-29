import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
  Wrap,
  Input,
  Button,
  MakeButton,
  SearchWrap,
  Tbody,
  Thead,
} from './styled';

const BoardPage = ({
  board, keyword, 
  onSubmit, onChangeToState
}) => {
  return (
    <div>
      <Wrap>
        <Thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>날짜</th>
          </tr>
        </Thead>
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
      <MakeButton>
        <button>글쓰기</button>
      </MakeButton>
      <SearchWrap className="Clearfix" onSubmit={onSubmit.bind(this)}>
        <Input name="keyword" value={keyword} onChange={onChangeToState} />
        <Button type="submit">검색</Button>
      </SearchWrap>
    </div>
  )
};

BoardPage.propTypes = {
  board: PropTypes.array,
  onSubmit: PropTypes.func,
};

export default BoardPage;
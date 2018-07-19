import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';

import Controller from './Controller';
import { getPost } from '@/redux/Board/action';

import {
  Wrap,
  Input,
  Button,
  MakeButton,
  SearchWrap,
  Tbody,
  Thead,
  TuiEditor,
  Preview,
} from './styled';

const BoardPage = ({
  board,
  keyword,
  onSubmit,
  onChangeToState,
  onSubmitToEditor,
}) => {
  return (
    <div>
      <LoadingBar style={{ background: '#A1759C' }} />
      <Wrap>
        <Thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>날짜</th>
          </tr>
        </Thead>
        <Tbody>
          {board.post &&
            board.post.map((item, key) => {
              const date = item.created ? moment.unix(item.created) : moment();
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{item.title || ''}</td>
                  <td>{date.format('YYYY-MM-DD a h:mm:ss')}</td>
                </tr>
              );
            })}
        </Tbody>
      </Wrap>
      <TuiEditor id="editor" />
      <MakeButton>
        <button onClick={onSubmitToEditor}>글쓰기</button>
      </MakeButton>
      <SearchWrap className="Clearfix" onSubmit={onSubmit.bind(this)}>
        <Input name="keyword" value={keyword} onChange={onChangeToState} />
        <Button type="submit">검색</Button>
      </SearchWrap>
      <Preview id="Preview" className="tui-editor-contents" />
    </div>
  );
};

BoardPage.propTypes = {
  board: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default connect(
  ({ board }) => ({ board }),
  { getPost }
)(Controller(BoardPage));

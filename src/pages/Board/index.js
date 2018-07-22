import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';

import TuiEditor from './Component/Editor';
import Controller from './Controller';
import { getPost, setPost } from '@/redux/Board/action';

import {
  Wrap,
  Input,
  Button,
  MakeButton,
  SearchWrap,
  Tbody,
  Thead,
  Editor,
  Preview,
} from './styled';

const BoardPage = ({
  YNedit,
  board,
  keyword,
  title,
  onSubmit,
  onChangeToState,
  onSubmitToEditor,
  onClickToList,
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
            Object.keys(board.post).map((key, idx) => {
              const item = board.post[key];
              const date = moment.unix(item.created);
              return (
                <tr key={idx} onClick={onClickToList.bind(this, item)}>
                  <td>{idx + 1}</td>
                  <td>{item.title}</td>
                  <td>{date.format('YYYY-MM-DD a h:mm:ss')}</td>
                </tr>
              );
            })}
        </Tbody>
      </Wrap>
      <SearchWrap className="Clearfix" onSubmit={onSubmit.bind(this)}>
        <Input name="keyword" value={keyword} onChange={onChangeToState} />
        <Button type="submit">검색</Button>
      </SearchWrap>
      {YNedit && (
        <Editor>
          <div>
            제목
            <Input
              className="noClear"
              value={title}
              name="title"
              onChange={onChangeToState}
            />
          </div>
          본문
          <TuiEditor />
          <MakeButton>
            <button onClick={onSubmitToEditor}>글쓰기</button>
          </MakeButton>
        </Editor>
      )}
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
  { getPost, setPost }
)(Controller(BoardPage));

import React, { Component } from 'react';

const C = BoardPage =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = this.initialState;
    }

    get initialState() {
      return {
        title: '',
        keyword: '',
        content: '',
        YNedit: false,
      };
    }

    componentDidMount() {
      const { getPost } = this.props;
      getPost();
    }

    onChangeToState = e => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };

    onSubmit = e => {
      e.preventDefault();
      const { keyword } = this.state;
      let msg = '' === keyword.trim() ? '내용을 입력하라고 상훈아' : keyword;
      alert(msg);
    };

    onSubmitToEditor = async () => {
      const { setPost } = this.props;
      const { title, editor } = this.state;
      const content = editor.getHtml();
      const data = {
        title,
        content,
        created: Math.floor(Date.now() / 1000),
      };
      await setPost(data);
      this.setState(
        {
          title: '',
        },
        () => {
          editor.reset();
        }
      );
    };

    onClickToList = item => {
      document.getElementById('Preview').innerHTML = item.content;
    };

    render() {
      return (
        <BoardPage
          {...this.props}
          {...this.state}
          onChangeToState={this.onChangeToState}
          onSubmit={this.onSubmit}
          onSubmitToEditor={this.onSubmitToEditor}
          onClickToList={this.onClickToList}
        />
      );
    }
  };

export default C;

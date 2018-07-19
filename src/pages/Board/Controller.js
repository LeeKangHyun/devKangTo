import React, { Component } from 'react';
import Editor from 'tui-editor';

// deps for editor
import 'codemirror/lib/codemirror.css'; // codemirror
import 'tui-editor/dist/tui-editor.css'; // editor ui
import 'tui-editor/dist/tui-editor-contents.css'; // editor content
import 'highlight.js/styles/github.css'; // code block highlight

const C = BoardPage =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        keyword: '',
        editor: null,
      };
    }

    componentDidMount() {
      const { editor } = this.state;
      const { getPost } = this.props;
      getPost();

      if (!editor) {
        const tui = new Editor({
          el: document.querySelector('#editor'),
          initialEditType: 'wysiwyg',
          previewStyle: 'tab',
          height: 'auto',
          language: 'ko_KR',
          events: {
            change: this.onSubmitToEditor,
          },
        });

        this.setState({
          editor: tui,
        });
      }
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

    onSubmitToEditor = () => {
      const { editor } = this.state;
      const string = editor.getHtml();
      document.querySelector('#Preview').innerHTML = string;
    };

    render() {
      return (
        <BoardPage
          {...this.props}
          {...this.state}
          onChangeToState={this.onChangeToState}
          onSubmit={this.onSubmit}
          onSubmitToEditor={this.onSubmitToEditor}
        />
      );
    }
  };

export default C;

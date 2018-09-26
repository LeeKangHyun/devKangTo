import React, { Component } from 'react';
import Tui from 'tui-editor';
import 'codemirror/lib/codemirror.css'; // codemirror
import 'tui-editor/dist/tui-editor.css'; // editor ui
import 'tui-editor/dist/tui-editor-contents.css'; // editor content
import 'highlight.js/styles/github.css'; // code block highlight

import { TuiEditor } from './styled';
class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      YNedit: false,
      editor: null,
    };
  }

  componentDidMount() {
    const { editor } = this.state;
    if (!editor) {
      this.makeEditor();
    }
  }

  makeEditor = () => {
    const tui = new Tui({
      el: document.querySelector('#editor'),
      initialEditType: 'wysiwyg',
      previewStyle: 'tab',
      height: 'auto',
      language: 'ko_KR',
      events: {},
    });

    this.setState({
      editor: tui,
    });
  };

  render() {
    return <TuiEditor id="editor" />;
  }
}

export default Editor;

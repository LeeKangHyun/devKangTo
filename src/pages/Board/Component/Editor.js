import React, { Component } from 'react';
import Tui from 'tui-editor';
import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'highlight.js/styles/github.css';

import { TuiEditor } from './styled';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  get initialState() {
    return {
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

    this.setState((state) => {
      return {
        editor: tui,
      };
    });
  };

  render() {
    return <TuiEditor id="editor" />;
  }
}

export default Editor;

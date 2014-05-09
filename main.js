"use strict";

var marked = require('marked');
var ace = require('brace');
require('brace/mode/markdown');
require('brace/theme/monokai');
var hljs = require('highlight.js');
hljs.configure({
  tabReplace: '  '
  // lineNodes: true
});

marked.setOptions({
  highlight: function(code, lang) {
    if (!lang) { return code; }

    return hljs.getHighlighted(code, lang).innerHTML;
  },
  langPrefix: 'hljs lang-'
});

var editor = ace.edit('editor');
editor.renderer.setPadding(20);
editor.getSession().setMode('ace/mode/markdown');
editor.setTheme('ace/theme/monokai');
// editor.setValue();
editor.clearSelection();

var previewEl = document.getElementById('preview');
var renderMarkdown = function() {
  previewEl.innerHTML = marked(editor.getValue());
};

editor.on('change', renderMarkdown);
renderMarkdown();

const mrkdwn = require('..')

const examples = {
  '<i>italics</i>': '_italics_',
  '<em>emphasis</em>': '_emphasis_',
  '<strong>strong</strong>': '*strong*',
  '<del>del</del>': '~del~',
  '<strike>strike</strike>': '~strike~',
  '<s>s</s>': '~s~',
  '<ol><li>item 1</li><li>item 2</li></ol>': '1. item 1\n2. item 2',
  '<ul><li>item 1</li><li>item 2</li></ul>': '• item 1\n• item 2',
  '<blockquote>blockquote</blockquote>': '> blockquote',
  '<code>code</code>': '`code`',
  '<pre><code>code\nblock</code></pre>': '```\ncode\nblock\n```',
  '<a href="https://example.com">Hello</a>': '<https://example.com|Hello>',
  '<h1>Heading 1</h1><p>paragraph</p>': '*Heading 1*\n\nparagraph',
  '<h2>Heading 2</h2><p>paragraph</p>': '*Heading 2*\n\nparagraph',
  '<h3>Heading 3</h3><p>paragraph</p>': '*Heading 3*\n\nparagraph',
  '<h4>Heading 4</h4><p>paragraph</p>': '*Heading 4*\n\nparagraph',
  '<h5>Heading 5</h5><p>paragraph</p>': '*Heading 5*\n\nparagraph',
  '<h6>Heading 6</h6><p>paragraph</p>': '*Heading 6*\n\nparagraph',
  '<ul class="contains-task-list">\n<li class="task-list-item"><input class="task-list-item-checkbox" type="checkbox"> item 1</li></ul>': '☐ item 1',
  '<ul class="contains-task-list">\n<li class="task-list-item"><input class="task-list-item-checkbox" type="checkbox" checked=""> item 2</li></ul>': '☑︎ item 2',
  '<img alt="hello world" src="http://example.com/logo.png">': '<http://example.com/logo.png|hello world>',
  '<img src="http://example.com/logo.png">': 'http://example.com/logo.png',
  '<a href="url"><img src="image" alt="hello"></a>': '<url|hello>',
  '<a href="url"><img src="image"></a>': '<url|image>',
  '<h2>1. First things first</h2>': '*1. First things first*'
}

Object.keys(examples).forEach((input) => {
  test(input, () => {
    expect(mrkdwn(input)).toEqual(examples[input])
  })
})

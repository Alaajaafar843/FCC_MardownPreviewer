import React from 'react';
import './App.css';
import ReactFCCtest from 'react-fcctest';
import marked from 'marked';
import 'font-awesome/css/font-awesome.min.css';

class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      input : placeholder
    }

    this.handleChange = this.handleChange.bind(this);

  } 

  handleChange(event) {

    this.setState({

      input : event.target.value

    });

  }


  render() {
    return (
      <div id="App">
        <ReactFCCtest />
        <div className="container">
            <div className='d-flex align-items-stretch w-100'>
                <div className='p-2 w-50 h-100'>
                    <div class="toolbar">
                      <div className="d-flex justify-content-start">
                      <i className='p-2' class="fa fa-free-code-camp" aria-hidden="true" style={{fontSize:'30px' , padding:'5px'}}></i>
                      <h3 className='p-2'>Editor</h3>
                    </div>
                    </div>
                    <textarea id='editor' value={this.state.input} onChange={this.handleChange}>

                    </textarea>
                </div>
                <div className='p-2 w-50 h-100'>
                    <div class="toolbar">
                      <div className="d-flex justify-content-start">
                      <i className='p-2' class="fa fa-free-code-camp" aria-hidden="true" style={{fontSize:'30px' , padding: '5px'}}></i>
                      <h3 className='p-2'>Previewer</h3>
                    </div>
                    </div>
                    <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.input),}}>
                      
                    </div>
                </div>
            </div>
        </div>
            
      </div>
    )
  }

}


const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

export default App;



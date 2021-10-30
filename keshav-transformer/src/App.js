import TextField from '@mui/material/TextField';
import { Component } from 'react';
import './App.css'


class App extends Component{
  constructor(props) {
		super(props);  
    this.state = {
      txt: '',
      trans:''
    };
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ 
      txt: e.target.value
    })
    var tmp = this.state.txt;
    var n = tmp.length;
    var ntmp = "";
    if(n > 0) 
      ntmp = ntmp.concat(tmp[0]);
    
    // Implement Logic Here
    for(let i = 1;i+1<n;i+=2){
      ntmp = ntmp.concat(tmp[i + 1]);
      ntmp = ntmp.concat(tmp[i]);
    }
    this.setState({ trans : ntmp });
  } 
	 
  render(){
    
    return(
    <div className="App">
      <header className="App-header">
      </header>
      <h1> Keshav Transformer </h1>
      <p> Enter any text and get the transformed version in Keshav style ! </p>
      <TextField
          id="outlined-multiline-flexible"
          label="Enter Text Here"
          multiline
          maxRows={10}
          onChange={this.handleChange}
        />
      <p>{this.state.trans}</p>
      <button onClick={() => {navigator.clipboard.writeText(this.state.trans)}}>Copy</button> 
    </div>
    );
  }
}

export default App;
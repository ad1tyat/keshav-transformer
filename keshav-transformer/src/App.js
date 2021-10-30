import TextField from '@mui/material/TextField';
import { Component } from 'react';
import './App.css'
import song from "./static/ahk.ogg";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Button from '@mui/material/Button';

class App extends Component{
  constructor(props) {
		super(props);  
    this.state = {
      txt: '',
      trans:'',
      isPlaying:false,
      audio : new Audio(song)
    };
  }
  insert = (arr, index, newItem) => {
    return([
    // part of the array before the specified index
    ...arr.slice(0, index),
    // inserted item
    newItem,
    // part of the array after the specified index
    ...arr.slice(index)
    ])
  }
  
  isVowel = (letter) => {
    let shouldRepeat = Math.floor(Math.random()*4);
    if(shouldRepeat === 1){
      return ("aeiouyAEIOUY".indexOf(letter) !== -1); 
    }
    else{
      return 0;
    }
  }

  addH = () =>{
    let shouldRepeat = Math.floor(Math.random()*5);
    if(shouldRepeat === 1){
      return "h"
    }else{
      return ""
    }
  }

  handleChange = (e) => {

    console.log(e.target.value)
    this.setState({ 
      txt: e.target.value
    })
    // var tmp = this.state.txt + " ";
    var tmp = this.state.txt ;
    var words = tmp.split(" ");
    
    var ntmp = "";
    for(let ind = 0;ind < words.length;ind++){
      var word = words[ind];
      var n = word.length;
      
      if(n >= 3){
        let shouldwap = Math.floor(Math.random()*2);
        if(shouldwap === 1){
        
        let swaploc = 1 + Math.floor(Math.random() * (n - 2));
        for(let i = 0;i+1<n;i++){
          if(i !== swaploc){
            if(this.isVowel(word[i])){
              ntmp = ntmp.concat(this.addH());
              ntmp = ntmp.concat(word[i]);
            }
            ntmp = ntmp.concat(word[i]);
          }else{
            if(this.isVowel(word[i + 1])){
            
              ntmp = ntmp.concat(this.addH());  
            ntmp = ntmp.concat(word[i + 1]);
          }
            ntmp = ntmp.concat(word[i + 1]);
            if(this.isVowel(word[i])){
              
              ntmp = ntmp.concat(this.addH());
              ntmp = ntmp.concat(word[i]);
            }
            ntmp = ntmp.concat(word[i]);
            i++;
          }
        }
        if(n%2 === 1 && swaploc !== n - 2){
          if(this.isVowel(word[n - 1])){
            
            
              ntmp = ntmp.concat(this.addH());
            ntmp = ntmp.concat(word[n - 1]);
          }
          ntmp = ntmp.concat(word[n - 1]);
        }
        ntmp = ntmp.concat(" ");
        }
        else{
          ntmp = ntmp.concat(word);
          ntmp = ntmp.concat(" ");
            
        }
      }else{      
        if(word === "is"){
          ntmp = ntmp.concat(" henga ");
        }else{        
          ntmp = ntmp.concat(word);
          ntmp = ntmp.concat(" ");
        }
      }
      console.log("ntmp :", ntmp);
    }
    this.setState({ trans : ntmp });
  } 
	onClick = () => {

    navigator.clipboard.writeText(this.state.trans)

    // Get state of song
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
    } else {

      // Play the song if it is paused
      this.state.audio.play();
    }

    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  }
  render(){
    
    return(
    <div className="App">
      <header className="App-header">
      </header>
      <h1> Keshav Transformer </h1>
      <p> Enter any text and get the transformed version in Keshav style ! </p>
      <p>[Keep Audio On : 🔊]</p>
      <TextField
          id="outlined-multiline-flexible"
          label="Enter Text Here"
          multiline
          maxRows={10}
          onChange={this.handleChange}
        />
      <p>{this.state.trans}</p>
      <Button variant="outlined" onClick={this.onClick}>Copy<ContentCopyIcon/></Button> 
    </div>
    );
  }
}

export default App;
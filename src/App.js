import './App.css';
import React from 'react';
import myImage from './imgSrc.jpg';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  
  state = {
    Person: {
      fullName : "Mabrouka JRAD",
      bio : "I love coding",
      imgSrc : myImage,
      profession : "software engineer"
    },
    count: 0,
    show : false
  };
  showPerson= () => {
    this.setState({
      show: !this.state.show, 
    }
    );
    setInterval(()=> {
      this.setState({
        count:this.state.count+1
      })
      console.log(this.state.count);
        },2000); 
        this.setState({
          count:0,
        })
       
      };
  

  render() {
  return (
    <div className="App">
      <h1> hello</h1>
      {this.state.show &&  (
          <>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={this.state.Person.imgSrc} alt="flowers"></img>
            <h1>{this.state.Person.profession}</h1>
            <h1>{this.state.count}</h1>

            <br></br>
          </>
        )}
      <Button variant="outline-primary" onClick={this.showPerson}>click here</Button>
           </div>
  );
  
}
}
export default App;

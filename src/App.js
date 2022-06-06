import React, {Component} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Dept from './components/Dept';
import DeptDetail from './components/DeptDetail';
import Pick from './components/Pick';
import About from './components/About';
import Header from './components/Header';
import axios from 'axios';


class App extends Component {
  constructor() {
    super()
    this.handleDetailsClick = this.handleDetailsClick.bind(this)
    this.getInfo = this.getInfo.bind(this)
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
    this.state = {
      allDept: [],
      chosenDept: [],
      deptWorks: [],
      faves: [],
    }
  }

  componentDidMount = () => {
    this.getAllDept()
  }

  getAllDept = () => {
    axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/departments`)
    .then((r) => {
      const depts = r.data.departments
      this.setState({
        allDept: depts
      })
    })
    .catch(e => {
      console.log(e)
    })
  }

  handleDetailsClick = (e) => {
    // this.chosenDept = []
    axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${e.target.id}`)
    .then((r) => {
      const objIDs = r.data.objectIDs

      const ran1 = objIDs[Math.floor(Math.random() * objIDs.length)]
      // const ran2 = objIDs[Math.floor(Math.random() * objIDs.length)]
      // const ran3 = objIDs[Math.floor(Math.random() * objIDs.length)]
      
      this.setState({ 
        chosenDept: ran1
      });
    })
    .catch(e => {
      console.log(e)
      })
  }

  getInfo = (artID) => {
    // this.deptWorks = []
    axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artID}`)
    .then((r) => {
      const randomWorks = r.data
      // const deptWorks = this.state.deptWorks.slice()
      // deptWorks.push(randomWorks)
      this.setState({
        deptWorks: randomWorks
      })
    })
    .catch(e => {
      console.log(e)
    })
  }

  handleFaveToggle = (artwork) => {
    const faves = this.state.faves.slice()
    const artIndex = faves.indexOf(artwork)
    if (artIndex > -1) {
      faves.splice(artIndex, 1)
    } else {
      faves.push(artwork)
    }
    this.setState({
      faves
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/department" element={<Dept allDept={this.state.allDept} 
              chosenDept={this.state.chosenDept} 
              handleDetailsClick={this.handleDetailsClick} />} />
            <Route path="/department/:id" element={<DeptDetail allDept={this.state.allDept} 
              chosenDept={this.state.chosenDept} deptWorks={this.state.deptWorks} 
              faves={this.state.faves} onFaveToggle={this.handleFaveToggle}
              getInfo={this.getInfo} />} />
            <Route path="/pick" element={<Pick />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    );
  }  
}


export default App;
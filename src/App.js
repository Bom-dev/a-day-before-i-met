import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import DeptList from './components/DeptList';
import Dept from './components/Dept';
import Pick from './components/Pick';
import About from './components/About';
import Header from './components/Header';
import Display from './components/Display';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.getInfo = this.getInfo.bind(this)
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
    this.getFaves = this.getFaves.bind(this)
    this.state = {
      allDept: [],
      deptWorks: [],
      faves: [],
      favesDetail: []
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

  getInfo = (artID) => {
    axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artID}`)

    .then((r) => {
      if(r != null){
        const workDetail = r.data
      this.setState({
        deptWorks: workDetail
      })
      }})

    .catch(e => {
      console.log(e);
      return null;
    })
  }

  getFaves = (artID) => {
    axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artID}`)

    .then((r) => {
        const favesDetails = [...this.state.favesDetail];
        const detailIndex = this.state.favesDetail.map((fave) => {
          return fave.objectID
        })
        const checkIndex = detailIndex.indexOf(r.data.objectID)

        if (checkIndex > -1) {
          favesDetails.splice(checkIndex, 1) 
        } else { 
          favesDetails.push(r.data)
        }
        this.setState({
        favesDetail: favesDetails
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

            <Route path="/department" element={<DeptList allDept={this.state.allDept} />} />

            <Route path="/department/:id" element={<Dept allDept={this.state.allDept} 
              deptWorks={this.state.deptWorks} 
              faves={this.state.faves} onFaveToggle={this.handleFaveToggle}
              getInfo={this.getInfo} getFaves={this.getFaves} />} />

            <Route path="/pick" element={<Pick 
            faves={this.state.faves} favesDetail={this.state.favesDetail} 
            getFaves={this.getFaves} deptWorks={this.state.deptWorks} 
            onFaveToggle={this.handleFaveToggle}/>} />

            <Route path="/display/:id" element={<Display getInfo={this.getInfo} deptWorks={this.state.deptWorks} onFaveToggle={this.handleFaveToggle} faves={this.state.faves} favesDetail={this.state.favesDetail} getFaves={this.getFaves}/>} />

            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    );
  }  
}


export default App;
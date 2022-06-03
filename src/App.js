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
    this.state = {
      allDept: []
    }
  }

  componentDidMount = () => {
    this.getAllDept()
  }

  getAllDept = () => {
    axios.get('https://collectionapi.metmuseum.org/public/collection/v1/departments')
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

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/department" element={<Dept allDept={this.state.allDept} />} />
            <Route path="/department/detail" element={<DeptDetail />} />
            <Route path="/pick" element={<Pick />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    );
  }  
}


export default App;
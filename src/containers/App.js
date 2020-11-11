import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'




function App() {
  const [robots,setRobots] = useState([]);
  const [searchField,setsearchField] = useState('');
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>setRobots(users))
    .catch(err => console.log(err))
   console.log(robots,searchField)   
  },[])

  const onSearchChange = event => {
    setsearchField(event.target.value)
  }

  const filteredRobots = robots.filter(robot => {
    return robot.name.includes(searchField);
  })

  return !robots.length?
  <h1>Loading</h1>:
  (
    <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox searchchange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  )
 }

export default App;

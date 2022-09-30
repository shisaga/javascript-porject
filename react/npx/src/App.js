
import './App.css';
import React,{useState} from 'react';
import data from './data_';
import List from './List';
function App() {
const [people, setPeople] = useState(data)
 
  return (<main>
    <section className='container'>
      <h3>{people.length} birthdays today</h3>
      <List people ={people}></List>
      {/* hear we are useing props in people */}
      <button onClick={()=> setPeople([])}>Clear all</button>
    </section>
  </main>);
}

export default App;

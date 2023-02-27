import React, { useState } from 'react';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import AddPost from './Components/DisplayPost/AddPost/AddPost';
import './app.css';

function App() {

  const [entries, setEntries] = useState([{name:"David Lagrange", post:"I love playing guitar. Does anyone want to play with me?", date:"04-21-2022"}, {name:"JJ Vega", post:"Its April fools Day! Dislike if you really like it!", date:"04-21-2022"}, {name:"Nevin Seibel", post:"My Rubik's cube is fully charged and ready for battle. Right after i eat my meal that has appeared from the magical hand from behind my curtain.", date:"04-21-2022"}])

  function addNewEntry(entry){
    let tempEntries =[...entries, entry];
 
    setEntries(tempEntries);
  }
  return(
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-6'>
          <div className='border-box'>
        <AddPost addNewEntryProperty={addNewEntry} />
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='border-box'>
      <DisplayPost parentEntries={entries} />
      </div>
      </div>
      </div>
     </div>
  
  );
}

export default App;
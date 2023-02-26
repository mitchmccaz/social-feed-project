import React, { useState } from 'react';
import DisplayEntries from './Components/Display Entries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';


function App() {

  const[entries, setEntries] = useState([{Name: 'David Lagrange', Post: 'I love playing guitar. Does anyone want to play with me??'}, {Name: 'JJ Vega ', Post: 'Its april Fools Day. Dislike if you really like it. :)'}])
  
  function addNewEntry(entry){

    let tempEntries = [...entries, entry];

    setEntries(tempEntries);
  }



  return (
   <div className = 'container-fluid'>
      <div className= 'row'>
        <h3 style={{margin:"1em"}}>Social<small className='text-muted' >Feed</small></h3>
        <div clasName = 'col-md-6'>
          <div className = 'border-box'>
            <DisplayEntries parentEntries={entries} />
            <AddEntryForm addNewEntryProperty={addNewEntry}/>
        </div>
      </div>
        <div clasName = 'col-md-6'>
          <div className='border-box'>
            <EntriesChartTracker parentEntries= {entries}/>
          </div>
        </div>      
      </div>
    </div>
  );
}

export default App;

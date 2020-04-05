import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Tabs from  './frontend/tabs';
import Weather from './frontend/weather';
import Autocomplete from './frontend/autocomplete';

const panes = [
  {title: 'one', content: 'This is the first tab!'},
  {title: 'two', content: 'This is the second tab!'},
  {title: 'three', content: 'This is the third tab!'}
];

const names = ['Abby', 'Barney', 'Barbara', 'Jeff', 'Jenny', 'Sarah'];

function Root(){
  return(
    <div>
      <Clock />
      <Weather />
      <div className='interactive'>
      <Tabs panes={panes}/>
      <Autocomplete names={names}/>
      </div>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root/>, root);
});

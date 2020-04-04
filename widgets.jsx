import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Tabs from  './frontend/tabs';

const panes = [
  {title: 'one', content: 'This is the first tab!'},
  {title: 'two', content: 'This is the second tab!'},
  {title: 'three', content: 'This is the third tab!'}
];

function Root(){
  return(
    <div>
      <Clock />
      <div className='interactive'>
      <Tabs panes={panes}/>

      </div>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root/>, root);
});

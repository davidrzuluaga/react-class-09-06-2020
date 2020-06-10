import React from 'react';
import './todo.css';
import TODOitem from './list/item';

function TodoList() {
  const [actions, setActions] = React.useState([
    'hit the gym',
    'water the plants',
    'visit granny',
  ]);

  return (
    <div className='Todo-List'>
      <div id='myDIV' className='header'>
        <h2 style={{ margin: '5px' }}>My To Do List</h2>
        <input type='text' id='myInput' placeholder='Title...' />
        <span className='addBtn'>Add</span>
      </div>
      <ul id='myUL'>
        {actions.map(action => (
          <TODOitem action={action} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

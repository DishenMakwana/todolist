import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
    addTodos,
    removeTodos,
    updateTodos,
    completeTodos,
} from '../redux/reducer';
import TodoItem from './TodoItem';

const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => dispatch(addTodos(todo)),
        removeTodo: (id) => dispatch(removeTodos(id)),
        updateTodo: (todo) => dispatch(updateTodos(todo)),
        completeTodo: (id) => dispatch(completeTodos(id)),
    };
};

const DisplayTodos = (props) => {
    const [sort, setSort] = useState('active');

    return (
        <div className='displaytodos'>
            <div className='buttons'>
                <button onClick={() => setSort('all')}>All</button>
                <button onClick={() => setSort('active')}>Active</button>
                <button onClick={() => setSort('completed')}>Completed</button>
            </div>
            <ul>
                {/* for all items */}
                {props.todos.length > 0 && sort === 'all'
                    ? props.todos.map((item) => {
                          return (
                              <TodoItem
                                  key={item.id}
                                  item={item}
                                  removeTodo={props.removeTodo}
                                  updateTodo={props.updateTodo}
                                  completeTodo={props.completeTodo}
                              />
                          );
                      })
                    : null}

                {/* for active todos */}
                {props.todos.length > 0 && sort === 'active'
                    ? props.todos.map((item) => {
                          return (
                              item.completed === false && (
                                  <TodoItem
                                      key={item.id}
                                      item={item}
                                      removeTodo={props.removeTodo}
                                      updateTodo={props.updateTodo}
                                      completeTodo={props.completeTodo}
                                  />
                              )
                          );
                      })
                    : null}

                {/* for completed todos */}
                {props.todos.length > 0 && sort === 'completed'
                    ? props.todos.map((item) => {
                          return (
                              item.completed === true && (
                                  <TodoItem
                                      key={item.id}
                                      item={item}
                                      removeTodo={props.removeTodo}
                                      updateTodo={props.updateTodo}
                                      completeTodo={props.completeTodo}
                                  />
                              )
                          );
                      })
                    : null}
            </ul>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);

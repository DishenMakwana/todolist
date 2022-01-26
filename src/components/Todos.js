import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodos } from '../redux/reducer';
import { GoPlus } from 'react-icons/go';

const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
    };
};

const Todos = (props) => {
    const [todo, setTodo] = useState('');

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const addFunction = () => {
        if (todo === '') {
            alert('Input is empty!');
        } else {
            props.addTodo({
                id: Math.floor(Math.random() * 1000),
                item: todo,
                completed: false,
            });
            setTodo('');
        }
    };

    // console.log('todo text: ', todo);
    // console.log('props from store: ', props);

    return (
        <div className='addTodos'>
            <input
                type='text'
                placeholder='Enter Todo'
                onChange={(e) => handleChange(e)}
                className='todo-input'
                value={todo}
            />
            <button className='add-btn' onClick={() => addFunction()}>
                <GoPlus />
            </button>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);

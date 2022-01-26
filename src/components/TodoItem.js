import React, { useRef } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { IoCheckmarkDoneSharp, IoClose } from 'react-icons/io5';

function TodoItem(props) {
    const { item, updateTodo, removeTodo, completeTodo } = props;

    const inputRef = useRef(true);

    const changeFocus = () => {
        inputRef.current.disabled = false;
        inputRef.current.focus();
    };

    const update = (id, value, e) => {
        // here 13 is a keycode for enter
        if (e.which === 13) {
            updateTodo({ id, item: value });
            inputRef.current.disabled = true;
        }
    };

    return (
        <li key={item.id} className='card'>
            <textarea
                ref={inputRef}
                disabled={inputRef}
                defaultValue={item.item}
                onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
            />
            <div className='btns'>
                <button onClick={() => changeFocus()}>
                    <AiFillEdit />
                </button>
                {item.completed === false && (
                    <button
                        onClick={() => completeTodo(item.id)}
                        style={{ color: 'green' }}>
                        <IoCheckmarkDoneSharp />
                    </button>
                )}
                <button
                    onClick={() => removeTodo(item.id)}
                    style={{ color: 'red' }}>
                    <IoClose />
                </button>
            </div>
            {item.completed && <span className='completed'>done</span>}
        </li>
    );
}

export default TodoItem;

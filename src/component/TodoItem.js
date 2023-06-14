import {MdDelete, MdDone} from 'react-icons/md'
import './scss/TodoItem.scss'
import cn from 'classnames';

const TodoItem = ({ item, remove }) => {

  const {id, title, done} = item;
    
  return (
    <>
        <li className='todo-list-item'>     
            <div className={cn('check-circle', {active: done})}>
                {done && <MdDone />}
            </div>
            <span className={cn('text', {finish: done})}>{title}</span>   
            <div className='remove' onClick={() => remove(id)}>
                <MdDelete />
            </div>
        </li>
    </>
  );
}

export default TodoItem;
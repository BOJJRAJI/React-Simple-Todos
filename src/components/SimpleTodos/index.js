import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todos: initialTodosList}

  onDeleteTodo = id => {
    const {todos} = this.state
    const filterData = todos.filter(item => item.id !== id)
    this.setState({todos: filterData})
  }

  render() {
    const {todos} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Simple Todos</h1>
          <ul className="todos-list">
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                deleteTodo={this.onDeleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos

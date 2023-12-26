//component that maps and displays all the habits saved by the user

import { ListGroup} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import HabitDetails from './HabitDetails'
import './HabitDisplay.css'

const HabitDisplay = () => {
  //extarcting habits from the state
  const { habits } = useSelector((state) => state.allHabits)
 
  return (
    <div className='mt-4 '>
      {/* mapping through the habits and listing them one by one*/}
      {habits.map((habit, index) => (

          // component that display habit individually
          <ListGroup.Item key={index} className='habitDisplay mb-3 rounded'>
            <p>
              <strong>{habit.title}</strong>&nbsp; :&nbsp; <i>{habit.description}</i>
            </p>
            
            <HabitDetails key={habit.title}  habit={habit} />
           
          </ListGroup.Item>
      
      ))}
    </div>
  )
}

export default HabitDisplay
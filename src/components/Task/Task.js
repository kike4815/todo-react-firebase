import React from 'react'
import { ReactComponent as Check } from '../../assets/check.svg'
import { ReactComponent as Delete } from '../../assets/delete.svg'
import firebase from '../../utils/firebase'
import 'firebase/firestore'

import './Task.scss'

const db = firebase.firestore(firebase)

export default function Task (props) {
    const { task,setReloadTasks } = props

    const completeTask = () => {
        db.collection('tasks')
            .doc(task.id)
            .update({
                completed: !task.completed
            })
            .then(()=> {
                setReloadTasks(true)
            })
    }

    const deleteTask = () => {
        db.collection('tasks')
        .doc(task.id)
        .delete()
        .then(()=> {
            setReloadTasks(true)
        })
    }

    return (
        <div className="task">
            <div>
                <Check 
                className={task.completed ? 'completed' : ''}
                onClick={completeTask} />
            </div>
            <div>{task.name}</div>
            <div>
                <Delete 
                onClick={deleteTask}
                />
            </div>
        </div>
    )
}

import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Spinner } from 'react-bootstrap'
import AddTasks from './components/AddTasks/AddTasks'
import { map, size } from 'lodash'
import firebase from './utils/firebase'
import 'firebase/firestore'
import Task from './components/Task'

import './App.scss'

const db = firebase.firestore(firebase)

function App () {
    const [ tasks, setTasks ] = useState(null)
    const [ reloadTasks, setReloadTasks ] = useState(false)

    useEffect(
        () => {
            db.collection('tasks').orderBy('completed').get().then((response) => {
                const arrayTasks = []
                map(response.docs, (task) => {
                    const data = task.data()
                    data.id = task.id
                    arrayTasks.push(data)
                })
                setTasks(arrayTasks)
            })
            setReloadTasks(false)
        },
        [ reloadTasks ]
    )

    return (
        <Container fluid className="app">
            <div className="title">
                <h1>ENRIC PEDRÓS SANCHEZ</h1>
            </div>

            <Row className="todo">
                <Col className="todo__title" xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
                    <h2>Today</h2>
                </Col>
                <Col className="todo__list" xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
                    {!tasks ? (
                        <div className="loading">
                            <Spinner animation="border" />
                            <span>Cargando...</span>
                        </div>
                    ) : size(tasks) === 0 ? (
                        <h3>No hay tareas...</h3>
                    ) : (
                        map(tasks, (task) => <Task key={task.id} task={task} setReloadTasks={setReloadTasks}/>)
                    )}
                </Col>
                <Col className="todo__input" xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
                    <AddTasks setReloadTasks={setReloadTasks} />
                </Col>
            </Row>
        </Container>
    )
}

export default App

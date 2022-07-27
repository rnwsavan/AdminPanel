import React from 'react';
import { useContext } from 'react';

function Task(props) {
    const { tasks } = useContext()
    return tasks.length ? (
        <div>

            {
                tasks.map(tasks => {
                    return (
                        <>
                        <h2>{tasks.id}</h2>
                        <h4>{tasks.title}</h4>
                        <p>{tasks.priority}</p>
                        </>
                    )
                })
            }
            
        </div>
    ) :
    (
        <div>No Books Found</div>
    )
}

export default Task;
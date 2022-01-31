import React from 'react'
import BoardList from './Sections/BoardList'

function BoardPage(){
    return (
        <div>
            <div>
                <h1>Board Title</h1>
            </div>
            <div>
                <button>글작성</button>
            </div>
            <div>
                <BoardList />
            </div>
        </div>
    )
}

export default BoardPage
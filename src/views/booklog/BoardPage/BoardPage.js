import React from 'react'
import BoardList from './Sections/BoardList'
import { Link } from 'react-router-dom'
function BoardPage(){
    return (
        <div>
            <div>
                <h1>북로그</h1>
            </div>
            <div>
                <Link to="/register">
                    <button>작성</button>
                </Link>
            </div>
            <div>
                <BoardList />
            </div>
        </div>
    )
}

export default BoardPage
import React from 'react'
import {useHistory} from 'react-router-dom'

const ComponentB = () => {
    const history= useHistory()
    const backPage = () => {
        history.push("/")
    }
    return(
        <div>
            ComponentB
            <button onClick={backPage}>ホームへ戻る</button>
        </div>
    )
}

export default ComponentB
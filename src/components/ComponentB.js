import React from 'react'
import {Link, useHistory} from 'react-router-dom'

const ComponentB = () => {
    const history= useHistory()
    const backPage = () => {
        history.push("/")
    }
    return(
        <div>
            ComponentB
            <button onClick={backPage}>ホームへ戻る</button>
            <Link to="ComponentC">Cのページに移動</Link>
        </div>
    )
}

export default ComponentB
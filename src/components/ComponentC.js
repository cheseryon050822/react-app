import React from 'react'
import { Link,useHistory } from 'react-router-dom'

const ComponentC = () => {
    const history= useHistory ()
    const yayoi= () => {
        history.push("/ComponentB")
    }
    return(
        <div>
            ComponentC
            <Link to="ComponentB">ComponentBへいってらっしゃーい</Link>
            <button onClick={yayoi}>ComponentBへ移動</button>
        </div>
    )
}

export default ComponentC
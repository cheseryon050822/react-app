import React from 'react'
import {Link} from 'react-router-dom'

const ComponentA = () => {
    return(
    <div>
        <div>ComponentA</div>
        <Link to="ComponentB">ComponentBへ移動</Link>
    </div>
    );
};

export default ComponentA
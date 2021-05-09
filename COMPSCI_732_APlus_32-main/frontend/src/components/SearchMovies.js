import { Input} from 'antd'
import React from 'react'

export default function SearchMovies (props){
    return (
        <div style = {{width :'100%'}}>
            <Input placeholder="input search text" value={props.value} 
            onChange = {(event) => props.setSearchItem(event.target.value)} />
        </div>
    )
}
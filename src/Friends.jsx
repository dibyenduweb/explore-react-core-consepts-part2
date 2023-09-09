/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend';
export default function Friends(){
    const [friends, setFriends] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])
    return(
        <div className='box'>
            <h3>Friends: {friends.length}</h3>
            {
                // eslint-disable-next-line react/jsx-no-undef
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}
/**
 * 1.state to hold data
 * 2.use effect with dependensy array
 * 3.use fetch to load data
 * 4.set loaded data to the state
 */
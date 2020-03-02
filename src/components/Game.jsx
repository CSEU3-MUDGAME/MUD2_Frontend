import React , { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

export default function Game(props){
    const [ room, setRoom ] = useState();

    useEffect(() => {
        axiosWithAuth()
        .get('https://lambda-mud-test.herokuapp.com/api/adv/init/')
        .then(res => {
            console.log(res)
            setRoom(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

    return (
        <div>
            Game
        </div>
    );
}

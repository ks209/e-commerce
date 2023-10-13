import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../Card/Card';
import './Main.css'

const Main = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products?limit=20')
          .then(response => {
            setList(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

      console.log(list);

  return (
    <>
    <div className='main'>

        {list.map((el) => {
            return <Card props={el}/>
        })}


    </div>
      
    </>
  )
}

export default Main

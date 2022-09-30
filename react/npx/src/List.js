import React from 'react'

const List = ({people}) => {
  return (
    <div>
    {people.map((person)=>{
        const {id,name,age,image} = person;
        return ( <><div id ={id} className ="person">  
        <img src= {image} alt={name}></img></div>
        <div>
            <h4>{name}</h4>
            <p>{age} years</p>

        </div>
        </> )
    })}
      
    </div>
  )
}

export default List

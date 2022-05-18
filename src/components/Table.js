import React from 'react'


const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>Action</th>
        </tr>
      </thead>
    )
  }

  const TableBody = (props) => {
      const view = props.characterData.map((character,index)=>{
        return (
            <tr key={index}>
                <td>{character.name}</td>
                <td>{character.job}</td>
                <td>
                    <button onClick={()=>props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
          )
      })
    return <tbody>{view}</tbody>
  }

const Table =(props)=>{
    
        const {characterData, removeCharacter} = props;
      return (
        <table>
          <TableHeader />
          <TableBody characterData={characterData} removeCharacter = {removeCharacter}/>
        </table>
        
      )
  }

export default Table;
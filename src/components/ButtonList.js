import React from 'react';
import Button from'./Button'

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name='All'/>
      <Button  name =' Gaming '/>
      <Button name ='Soccer'/>
      <Button name="Songs"/>
      <Button name ="Live"/>
      <Button  name="Basketball"/>
      <Button  name="Cricket"/>
    </div>
  )
}

export default ButtonList

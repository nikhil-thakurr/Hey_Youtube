import React from 'react'
import Button from './Button'

const list=["All","Sports","Entertainment","Gaming","Esports","Chess","Music","Party","Songs","News","World Cup","Educational"]

const ButtonList = () => {
  return (
    list.map((val, index) => (
      <Button key={index} name={val} />
    ))

  )
}

export default ButtonList
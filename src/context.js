import React, { createContext, useState } from 'react'

export const RoomContext = createContext()

const RoomContextProvider = (props) => {

  return (
  <RoomContext.Provider value= {"hello"}>
  {props.children}
  </RoomContext.Provider>
    )
}

export default RoomContextProvider;

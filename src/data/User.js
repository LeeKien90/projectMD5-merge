import React, {createContext,useEffect,useState} from 'react'
import { getDataUser } from '../service/api'

export const UserContext = createContext();
export default function User() {
  return (
    <div>user</div>
  )
}

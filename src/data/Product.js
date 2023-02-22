import React, {createContext,useEffect,useState} from 'react'
import { getDataProduct } from '../service/api'

export const ProductContext = createContext();
export default function Product() {
  return (
    <div>product</div>
  )
}

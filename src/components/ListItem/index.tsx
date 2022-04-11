import { useState } from 'react';
import * as Component from './styles'
import { Item } from '../../types/Item';

type Props={
    props:Item
}
export const ListItem = ({props}:Props)=>{
    const [isCheck, setIsCheck] = useState(props.status)

    return(
        <Component.Container status={isCheck}>
           <input 
              type='checkbox' 
              checked={isCheck}
              onChange={e=> setIsCheck(e.target.checked)}
           />
           <label>{props.name}</label>
        </Component.Container>
    )
}
import { useState } from 'react';
import * as Component from './App.styles'
import { Item } from './types/Item';
import { ListItem } from './components/ListItem/index';
import { AddItem } from './components/AddItem';


const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Fazer compras", status: true },
    { id: 2, name: "Ir na academia", status: true }
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      status: false
    });
    setList(newList);
  }

  return (
    <Component.Container>

      <Component.Area>
        <Component.Header>Lista de Tarefas</Component.Header>
          <AddItem onEnter={handleAddTask}/>
        {list.map((e, index) => (
          <ListItem key={index} props={e} />
        ))}
      </Component.Area>
    </Component.Container>
  );
}

export default App;

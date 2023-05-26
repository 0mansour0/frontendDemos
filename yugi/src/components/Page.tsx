import React from 'react'
import { Button } from './reusable/Button';
import { Input } from './reusable/Input';
import { Main } from './styled/main.styled';
import { ViewTable } from './ViewTable';

export const Page = () => {
  return (
    <Main bg="layer" style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
      <div style={{ flexDirection: 'column', justifyContent: 'center', width: '97%', height: '100%' }}>
        <div style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button text="Export" mt="1rem" color="text" bg="base" />
          <Button text="Import" ml="1rem" mt="1rem" color="text" bg="base" />
          <Button text="Delete" ml="1rem" mt="1rem" color="base" bg="primary" />
          <Button text="Sort by" ml="15rem" mt="1rem" color="text" bg="base" />
          <Input name="email" id="email" ml="1rem" type="text" placeholder="search here" color="text" bg="white" width={[1 / 5]} />
          <Button text="Add New" ml="1rem" mt="1rem" color="base" bg="secondary" />
        </div>
        <ViewTable />
      </div>
    </Main>
  )
}

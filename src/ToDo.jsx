import React from 'react'
import { Button, Input, HStack, List, ListItem } from "@chakra-ui/react"
import { useState } from 'react'

const ToDo = () => {
  const [inputData, setInputData] = useState("")
  const [allData, setAllData] = useState([])






  const handleButton = () => {
    console.log(inputData, "oo")
    setAllData([...allData, inputData])
    console.log(allData, "allll")


  }
  const handleDelete = () => {

  }
  return (
    <div>
      <HStack>

        <Input p={7} type="text" placeholder='enter task' value={inputData} size="md" onChange={(e) => setInputData(e.target.value)} />
        <Button variant="solid" bg="blue" color="yellow" onClick={handleButton}>Click</Button>
      </HStack>

      <List>
      {allData.map((e,index)=>
        <ListItem key={index}>
        

        </ListItem>
      )}
     
      </List>
    </div>
  )
}

export default ToDo

// https://hazel-sour-beam.glitch.me

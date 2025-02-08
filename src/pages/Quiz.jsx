import React, { useState,useEffect } from 'react'
import { Container, Box, Heading } from "@chakra-ui/react"
import { SiConstruct3 } from 'react-icons/si'
const Quiz = () => {
  const [questions, setQuestions] = useState([])
  const [answer, setAnswer] = useState([])
  const [error,setError]=useState(null)

  useEffect=(()=>{
    axios.get()
    ,then(()=>{

    }).catch(()=>{
      
    })

  },[])
  return (

    <div>
      <Container>
        <Box>
          <Heading as="h2"size="xl">
            Take the Quiz
          </Heading>

        </Box>
      </Container>

    </div>
  )
}

export default Quiz

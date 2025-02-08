// import React from 'react'
// import { Box, input, Text } from "@chakra-ui/react"
// import { SiAxios } from 'react-icons/si'

// const Login = () => {
//     const [username,setUsername]=useState("")
//     const [password, setPassword] = useState("")

//    const  handleLogin=async(e)=>{
//     e.preventDefault()
//     try{
//         const respnse=await axios.post(``),{
//             username, password,
//         },
       
//     };
//     if(response.data.success){
//         Navigate("/quiz")
//     }
//     catch{
//         setError()
//     }

//     }
//     return (
//         <div>
//             <Box maxW={"sm"}
//                 mx={"auto"}
//                 mt={"100"}
//                 p={5}
//                 borderWidth={1}
//                 boxShadow={"md"}

//             >
//                 <Text fontSize={"2xl"} fontWeight={"bold"} textAlign={"center"}>Login</Text>
//                 <form onSubmit={handleLogin}>
//                     <stack gap={4}>

//                         <input type="text" placeholder='enter your name0' value={username} onChange={(e) => setUserName(e.target.value)} />
//                         <input type="text" placeholder='enter your name0' value={username} onChange={(e) => setUserName(e.target.value)} />

//                         <Button type="submit" colorPalette={"blue"} widh={"fiull"}></Button>
                    
//                     </stack>
//                 </form>

//             </Box>

//         </div>
//     )
// }

// export default Login

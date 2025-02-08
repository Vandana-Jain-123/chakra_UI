import { Button, HStack } from "@chakra-ui/react"
// import { colorPalettes } from "compositions/lib/color-palettes"

import {RiMailLine,RiArrowRightLine} from "react-icons/ri"
const Demo = () => {
    return (
        <HStack gap="6">
            <Button variant="subtle" color="blue" bg="yellow"><RiMailLine/>Subtle</Button>
            <Button size="xl" variant="solid" bg="green">Click me</Button>
            <Button size="xl" variant="surface" colorPalette="red" bg="cyan">Click me <RiArrowRightLine/> </Button>
            <Button variant="outline" color="yellow" bg="blue" >Outline</Button>
            <Button variant="ghost" colorPalette="blue"  bg="grey">Ghost</Button>
            <Button variant="plain" color="white" bg="orange" >Plain</Button>
        </HStack>
      
    )
}
export default Demo;
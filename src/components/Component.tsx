import { Box, Button } from "@chakra-ui/react"
import { FC, useState } from "react"

const asyncPow = async (num:number) => {
  // await new Promise(resolve => setTimeout(resolve, 10)) 
  // const result = await new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(1)
  //   },1000)
  // })
  return num
}
const useProcess = () => {
  const [result, setResult] = useState({})
  // const [progress, setProgress] = useState({})
  const start = async (records: any[]) => {
    // setResult(() => {
    //   return Object.fromEntries(records.map(record => [record.value, {status: "waiting"}] ))
    // })
    // setProgress(0)
    for(let record of records){
      // setProgress((before) => ({...before, [record.value]:true}))
      const result = await asyncPow(record.value)
      // setResult((before) => ({...before, [record.value]:true}))
      setResult((before) => {
        return {...before, [record.value]: result}
      })
      // setProgress(curr => curr + 1)
      if(!result){
        return 
      }
    }  
  }
  return {
    start,
    // progress,
    result
  }
}
export const Sample: FC<{}> = () => {
  const {start,result} = useProcess()
  const records = [
    // {value:0},
    {value:1},
    {value:2},
    {value:3},
    {value:4},
    {value:5},
  ]
  // console.log(result)
  return <Box>
    <Button onClick={() => start(records)}>Start</Button>
    {/* <div>{progress}</div> */}
    <pre>
      {/* <code>
        {JSON.stringify(progress,null,2)}
      </code> */}
      <code>
        {JSON.stringify(result,null,2)}
      </code>
    </pre>
  </Box>
}
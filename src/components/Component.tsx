import { Box, Button } from "@chakra-ui/react"
import { FC, useState } from "react"

const asyncPow = async (num:number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    },1000)
  })
}
export const Sample: FC<{}> = () => {
  const [result, setResult] = useState({})
  const [progress, setProgress] = useState(0)
  const records = [
    {value:1},
    {value:2},
    {value:3},
    {value:4},
    {value:5},
  ]
  const start = async (records: any[]) => {
    setResult(() => {
      return Object.fromEntries(records.map(record => [record.value, {status: "waiting"}] ))
    })
    setProgress(0)
    for(let record of records){
      console.log(record)
      setResult((before) => { 
        return {...before, [record.value]: {status: "progress"}}
      })
      const result = await asyncPow(record.value)
      setResult((before) => {
        return {...before, [record.value]:{status: "completed",result}}
      })
      setProgress(curr => curr + 1)
    }  
  }
  return <Box>
    <Button onClick={() => start(records)}>Start</Button>
    <div>{progress}</div>
    <pre>
      <code>
        {JSON.stringify(result,null,2)}
      </code>
    </pre>
  </Box>
}
import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import { Sample } from '../components/Component'

export default function Home() {
  return (
    <Box>
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sample/>
    </Box>
  )
}

import React from 'react'
import { Box, Text } from '@chakra-ui/react'

import { testBoothSequence as boothSequence } from './config'
import { vendors } from './data'

export default function BoothSequenceTest(){
  const booths = vendors.map(vendor => vendor.booth)

  // TODO: Verify the arrays match 100% (instead of length comparison)
  const passed = booths.length === boothSequence.length
  const status = passed ? "Pass" : "Fail"

  return <Box><Text>Booth Sequence Check: {status}</Text></Box>
}

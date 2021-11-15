import React from 'react'
import { Box, Text } from '@chakra-ui/react'

import { forcedPairs, regions } from './config'
import { attendees } from './data'

export default function Pairs(){
  const [pairs, setPairs] = React.useState(forcedPairs)
  const [paired, setPaired] = React.useState(forcedPairs.flat())

  function intersection(arrA, arrB){
    return arrA.filter(item => arrB.includes(item))
  }

  function difference(arrA, arrB){
    return arrA.filter(item => !arrB.includes(item))
  }

  // Given a state, return all states outside its region
  function getValidStates(state){
    return regions.filter(region => !region.includes(state)).flat()
  }

  // Given valid states, return an unpaired attendee from one of the states
  // TODO: Implement forbidden pairs
  function getValidPartner(validStates){
    const unpaired = attendees.filter(attendee => !paired.includes(attendee.name))
    return unpaired.find(attendee => validStates.includes(attendee.state))
  }

  function getValidPair(attendee){
    const validStates = getValidStates(attendee.state)
    const partner = getValidPartner(validStates)
    return [attendee.name, partner.name]
  }

  function getNextAttendee(){
    const nextAttendee = attendees.find(attendee => !paired.includes(attendee.name))
    if(nextAttendee === undefined){
      console.log("Pairs before error:",pairs)
      throw new Error('Unable to get next attendee')
    }
    return nextAttendee
  }

  function generatePairs(){
    const maxPairs = Math.ceil(attendees.length / 2)

    // Pair remaining attendees
    while(pairs.length < maxPairs){
      const nextAttendee = getNextAttendee()
      const newPair = getValidPair(nextAttendee)
      setPaired([...paired, ...newPair])
      return setPairs([...pairs, newPair])
    }
    console.log(pairs)
  }

    generatePairs()

  return <Box><Text>Pairs</Text></Box>
}

import React from 'react'
import { DateTime } from 'luxon'
import { Box, Text } from '@chakra-ui/react'

import {schedule, rotationLength, breakLimit} from './config'

export default function TimeSlots(){

  // TODO: output formatted date string
  function formatTime(isoString){
    return DateTime.fromISO(isoString)
  }

  function breaksPerSlot(slotMins){
    if(slotMins <= breakLimit) return 0
    return Math.floor(slotMins/breakLimit) - 1
  }

  const rotationSlotsPerHour = Math.floor(60/ rotationLength)
  console.log(rotationSlotsPerHour)

  console.log("Breaks for 10 mins:", breaksPerSlot(10))
  console.log("Breaks for 120 mins:", breaksPerSlot(120))
  console.log("Breaks for 240 mins:", breaksPerSlot(240))
  console.log("Breaks for 360 mins:", breaksPerSlot(360))

  const timeslots = schedule.map(timeslot => {
    if(timeslot.type !== "rotation") {
      // TODO: fix time label
      const startTime = formatTime(timeslot.start)
      const timeLabel = `${startTime.hour}:${startTime.minute}`
      console.log(timeLabel)
      return { time: timeslot.start, label: timeslot.type}
    }
    else {
      // TODO: generate rotation slots
      return { time: "", label: "generate times"}
    }
  })

  console.log(timeslots)

  return <Box><Text>Timeslots</Text></Box>
}

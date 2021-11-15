// Number of minutes per rotation
export const rotationLength = 9

// Max minutes until break
export const breakLimit = 120

// Schedule blocks with start and end times in ISO format
export const schedule = [
  { type: "rotation", start: "2021-09-20T:14:00", end: "2021-09-20T18:00"},
  { type: "rotation", start: "2021-09-21T:08:00", end: "2021-09-21T10:00"},
  { type: "open", start: "2021-09-21T:10:00", end: "2021-09-21T12:00"},
  { type: "lunch", start: "2021-09-21T:12:00", end: "2021-09-21T13:00"},
  { type: "rotation", start: "2021-09-21T:13:00", end: "2021-09-21T18:00"},
]

export const testBoothSequence = [
  "102", "101", "202", "201", "301"
]

// Physical booth rotation order
export const boothSequence = [
  "118", "116", "114", "112", "108", "106", "102", "100", "101", "103",
  "107", "109", "117", "119", "218", "216", "208", "206", "202", "200",
  "201", "203", "207", "209", "217", "318", "316", "308", "306", "302",
  "300", "301", "303", "307", "313", "315", "317", "319"]

// Tuples of attendee IDs to force pairings
export const forcedPairs = [
  ["Rick","Morty"]
]

// Tuples of attendee IDs to forbid pairings
export const forbiddenPairs = [
  ["Jerry","Beth"]
]

// States per region
export const regions = [
  ["tx", "ok", "ak"],
  ["wa", "or", "wy"],
  ["ga", "fl", "nc", "sc"],
  ["dc", "va", "md"],
]

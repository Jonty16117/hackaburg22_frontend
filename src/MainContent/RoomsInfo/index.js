import React from 'react'
import OverviewChart from '../Overview/OverviewChart';

const roomsLabels = ['Room 1', 'Room 2', 'Room 3', 'Room 4'];
const roomsData = roomsLabels.map(() => Math.floor(Math.random() * 10));

function RoomsInfo() {
  return (
    <OverviewChart data={roomsData} labels={roomsLabels} title={'Rooms overview'} />
  )
}

export default RoomsInfo
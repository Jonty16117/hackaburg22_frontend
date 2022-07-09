import React from 'react'
import OverviewChart from '../Overview/OverviewChart';

const parkingLabels = ['Spot 1', 'Spot 2', 'Spot 3', 'Spot 4'];
const parkingData = parkingLabels.map(() => Math.floor(Math.random() * 10));

function ParkingInfo() {
  return (
    <OverviewChart data={parkingData} labels={parkingLabels} title={'Parking overview'} />
  )
}

export default ParkingInfo
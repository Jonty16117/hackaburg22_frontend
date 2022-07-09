import React from 'react'
import OverviewChart from '../Overview/OverviewChart';

const foodLabels = ['Non-Veg', 'Veg', 'Vegan', 'Any'];
const foodData = foodLabels.map(() => Math.floor(Math.random() * 10));

function FoodInfo() {
  return (
    <OverviewChart data={foodData} labels={foodLabels} title={'Food overview'} />
  )
}

export default FoodInfo
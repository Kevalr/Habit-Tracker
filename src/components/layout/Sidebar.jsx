import React from 'react';
import HabitsList from "../HabitsList"

const Sidebar = ({setIsShowAddHabitModal, setSelectedHabit}) => {
  return (
    <div className='lg:w-3/12 w-4/12 border-r border-black h-[90dvh] flex flex-col items-center py-5'>
      <HabitsList setIsShowAddHabitModal={setIsShowAddHabitModal} setSelectedHabit={setSelectedHabit}/>
    </div>
  )
}

export default Sidebar;
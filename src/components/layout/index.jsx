import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import HabitDetails from "../HabitDetails";

const index = ({ setIsShowAddHabitModal, selectedHabit, setSelectedHabit }) => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar
          setIsShowAddHabitModal={setIsShowAddHabitModal}
          setSelectedHabit={setSelectedHabit}
        />
        <HabitDetails selectedHabit={selectedHabit}/>
      </div>
    </div>
  );
};

export default index;

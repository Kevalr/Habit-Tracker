import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";
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

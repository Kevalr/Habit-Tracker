import { useState } from "react";
import CreateHabitForm from "./components/CreateHabitForm";
import Layout from "./components/layout";

function App() {
  const [isShowAddHabitModal, setIsShowAddHabitModal] = useState(false);
  const [selectedHabit, setSelectedHabit] = useState(null);
  return (
    <>
      <div className="w-[100dvw] h-[100dvh] bg-white">
        <Layout setIsShowAddHabitModal={setIsShowAddHabitModal} selectedHabit={selectedHabit} setSelectedHabit={setSelectedHabit}/>
        { isShowAddHabitModal && <CreateHabitForm setIsShowAddHabitModal={setIsShowAddHabitModal}/> }
      </div>
    </>
  )
}

export default App

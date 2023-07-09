import React from "react";
import { deleteHabit } from "../features/habitsSlice";
import { useDispatch, useSelector } from "react-redux";

const HabitsList = ({ setIsShowAddHabitModal, setSelectedHabit }) => {
  const { habits } = useSelector((state) => state.allHabits);
  console.log(habits);

  return (
    <div className="max-h-full w-full flex flex-col justify-center items-center">
      {habits.map((habit, index) => (
        <HabitOverViewCard key={index + habit.title} habit={habit} setSelectedHabit={setSelectedHabit} />
      ))}

      <button
        className="bg-black text-white w-11/12 py-2 tracking-wider rounded-lg text-xl uppercase font-semibold hover:bg-green-700"
        onClick={() => setIsShowAddHabitModal(true)}
      >
        Create Habit
      </button>
    </div>
  );
};

export default HabitsList;

const HabitOverViewCard = ({ habit, setSelectedHabit }) => {
  const dispatch = useDispatch();

  const deleteHandler = (title) => {
    dispatch(deleteHabit(title)); 
  };

  return (
    <div
      className="bg-gray-300 flex gap-2 justify-between items-center w-11/12 py-2 rounded-lg px-6 mb-2 text-xl hover:bg-gray-400"
      onClick={() => setSelectedHabit(habit)}
    >
      <div className="flex-1 capitalize">{habit.title}</div>
      <i
        className="fa-solid fa-trash px-2 text-red-700 hover:scale-110 hover:text-black transition-transform duration-75"
        style={{ fontSize: "17px" }}
        onClick={() => deleteHandler(habit.title)}
      ></i>
    </div>
  );
};

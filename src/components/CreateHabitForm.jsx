import React, { useRef } from "react";
import { useDispatch } from 'react-redux';
import { addHabit } from '../features/habitsSlice';
import { details } from '../features/habitsSlice';

const CreateHabitForm = ({ setIsShowAddHabitModal }) => {
  
  const dispatch = useDispatch()
  
  const titleRef = useRef("");
  const descriptionRef = useRef("");

  function createHabit(e) {
    e.preventDefault();

    const payload = {
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        details: details,
    }

    dispatch(addHabit(payload))
    console.log(payload);

    setIsShowAddHabitModal(false);
  }

  return (
    <div className="absolute top-0 flex justify-center items-center z-10 w-[100dvw] h-[100dvh] bg-gray-900 bg-opacity-50">
      <div className="bg-white text-lg p-5 rounded-lg w-96 backdrop:blur-xl shadow-xl drop-shadow-xl shadow-black relative">
        <span className="absolute -right-3 -top-3 border-black cursor-pointer border-[3px] rounded-full px-2 font-semibold bg-white" onClick={() => setIsShowAddHabitModal(false)}>X</span>
        <form>
          <div>
            <label htmlFor="title">Habit Name:</label>
            <br />
            <input
              type="text"
              name="title"
              ref={titleRef}
              placeholder="Enter Habit Name"
              className="px-2 py-1 rounded-md my-2 w-full border-2 border-black-400 focus:outline-black"
              required
            />
          </div>
          <div className="my-3">
            <label htmlFor="title">Habit Description:</label>
            <br />
            <input
              type="text"
              name="title"
              ref={descriptionRef}
              placeholder="Enter Habit Description"
              className="px-2 py-1 rounded-md my-2 w-full border-2 border-black-400 focus:outline-black"
            />
          </div>
          <div className="flex justify-around py-2">
            <button
              className="bg-red-900 text-white px-5 py-2 rounded-lg hover:scale-105 transition-all duration-100"
              onClick={() => setIsShowAddHabitModal(false)}
            >
              Cancel
            </button>
            <button className="bg-yellow-500 px-5 py-2 rounded-lg hover:scale-105 transition-all duration-100" onClick={createHabit}>
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateHabitForm;

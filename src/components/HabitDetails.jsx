import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeStatus } from "../features/habitsSlice";

const HabitDetails = ({ selectedHabit }) => {
  const dispatch = useDispatch();

  const [habitDetails, setHabitDetails] = useState(null);

  useEffect(() => {
    selectedHabit && setHabitDetails(selectedHabit);
  }, [selectedHabit]);

  // handlers to change status on click
  const checkStatusHandler = (info, index) => {
    let updatedDetails = [...habitDetails.details];
    updatedDetails[index] = {
      day: info[1],
      status: "done",
    };

    setHabitDetails((prev) => {
      return {
        ...prev,
        details: updatedDetails,
      };
    });

    dispatch(
      changeStatus({
        title: info[0],
        details: [
          {
            day: info[1],
            status: "done",
          },
        ],
      })
    );
  };

  const doneStatusHandler = (info, index) => {
    let updatedDetails = [...habitDetails.details];
    updatedDetails[index] = {
      day: info[1],
      status: "fail",
    };

    setHabitDetails((prev) => {
      return {
        ...prev,
        details: updatedDetails,
      };
    });

    dispatch(
      changeStatus({
        title: info[0],
        details: [
          {
            day: info[1],
            status: "fail",
          },
        ],
      })
    );
  };

  const failStatusHandler = (info, index) => {
    let updatedDetails = [...habitDetails.details];
    updatedDetails[index] = {
      day: info[1],
      status: "none",
    };

    setHabitDetails((prev) => {
      return {
        ...prev,
        details: updatedDetails,
      };
    });
    dispatch(
      changeStatus({
        title: info[0],
        details: [
          {
            day: info[1],
            status: "none",
          },
        ],
      })
    );
  };
  return (
    <div className="flex-1 max-h-[90dvh] p-6 text-lg">
      {habitDetails ? (
        <div className="bg-gray-200 px-3 py-5 rounded-md">
          <p className="font-bold text-center pb-4 text-2xl">
            {habitDetails.title} : {habitDetails.description}
          </p>
          <div className="flex gap-4 items-center justify-around">
            {habitDetails.details?.map((detail, index) => (
              <div key={habitDetails.title + index} className="text-center">
                <p>{detail.day}</p>
                <i
                  className={`fa-solid ${
                    detail.status === "none"
                      ? "fa-check"
                      : detail.status === "done"
                      ? "fa-lg fa-circle-check done text-green-800"
                      : "fa-lg fa-circle-xmark fail text-red-700"
                  } `}
                  onClick={() => {
                    detail.status === "none"
                      ? checkStatusHandler(
                          [habitDetails.title, detail.day],
                          index
                        )
                      : detail.status === "done"
                      ? doneStatusHandler(
                          [habitDetails.title, detail.day],
                          index
                        )
                      : failStatusHandler(
                          [habitDetails.title, detail.day],
                          index
                        );
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-full">
          <p className="w-72 text-center capitalize text-red-950 font-semibold font-mono text-2xl">Please Click on any habit see its detailed view</p>
        </div>
      )}
    </div>
  );
};

export default HabitDetails;

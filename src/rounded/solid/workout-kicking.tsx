import React from "react";
const WorkoutKicking: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M3.125 5.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M12.638 3.6a1 1 0 1 0-1.6-1.2l-5.48 7.306a1 1 0 0 0-.056.083c-.273.451-.65 1.489-.457 2.698.06.358.128.766.215 1.056.099.33.264.694.61.985.282.237.637.317.813.353.228.045.48.071.72.087C7.877 15 8.412 15 8.809 15h.015a1 1 0 0 0 0-2c-.413 0-.886 0-1.287-.027a5 5 0 0 1-.37-.038 9 9 0 0 1-.147-.768c-.099-.62.094-1.15.177-1.313l.59-.787c.172.143.38.293.593.447l3.463 2.498V21a1 1 0 1 0 2 0v-8.29l1.172-2.666 5.612-6.384a1 1 0 0 0-1.502-1.32l-5.093 5.793-2.443-1.9a11 11 0 0 0-.594-.442z"
      />
    </svg>
  );
};
export default WorkoutKicking;

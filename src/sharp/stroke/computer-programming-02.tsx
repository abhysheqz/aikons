import React from "react";
const ComputerProgramming_02: React.FC<
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
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 2.969H2v15.026h20V8.98"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M14 22.002v-4.007m-4 4.007v-4.007"
      />
      <path
        stroke="#000"
        strokeWidth={1.5}
        d="M7 22.002h10M8 9.981l7.01.007m4.432-7.96L14.02 7.443v2.537l2.487.018 5.433-5.461a.1.1 0 0 0 0-.142l-2.357-2.369a.1.1 0 0 0-.141 0Z"
      />
    </svg>
  );
};
export default ComputerProgramming_02;

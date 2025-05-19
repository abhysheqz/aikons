import React from "react";
const PieChart_09: React.FC<
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
        d="M10.25 2.25H11a10.75 10.75 0 0 1 7.677 18.275l-.525.536-7.902-7.746z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m9.174 5.941-.703.262a7.25 7.25 0 1 0 5.247 13.52l.696-.281.563 1.39-.696.281A8.75 8.75 0 1 1 7.948 4.796l.703-.26z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PieChart_09;

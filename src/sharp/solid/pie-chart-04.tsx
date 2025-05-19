import React from "react";
const PieChart_04: React.FC<
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
        d="M11.25 1.25c-5.587.386-10 5.051-10 10.75s4.413 10.364 10 10.75zM12.75 22.75c5.587-.386 10-5.051 10-10.75s-4.413-10.364-10-10.75z"
      />
    </svg>
  );
};
export default PieChart_04;

import React from "react";
const PieChart_01: React.FC<
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
        d="M15.692 1.324a.75.75 0 0 1 .582-.029 10.78 10.78 0 0 1 6.43 6.43.75.75 0 0 1-.466.968l-9 3.018a.75.75 0 0 1-.95-.95l3.019-9a.75.75 0 0 1 .385-.437"
      />
      <path
        fill="currentColor"
        d="M13.742 2.496A10.3 10.3 0 0 0 11.5 2.25C5.84 2.25 1.25 6.84 1.25 12.5S5.84 22.75 11.5 22.75s10.25-4.59 10.25-10.25c0-.77-.085-1.52-.246-2.242l-7.868 2.638a2 2 0 0 1-2.532-2.532z"
      />
    </svg>
  );
};
export default PieChart_01;

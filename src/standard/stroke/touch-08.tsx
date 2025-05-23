import React from "react";
const Touch_08: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 12.355V10.5A1.5 1.5 0 0 0 12.5 9H11m6 4v-1.5a1.5 1.5 0 0 0-1.5-1.5h-1.267M11 9v2.421M11 9V4a1.5 1.5 0 0 0-3 0v5m9.324 2H18.5a1.5 1.5 0 0 1 1.5 1.5v6a3 3 0 0 1-3 3H9.606a3 3 0 0 1-2.497-1.336l-2.605-3.908A3 3 0 0 1 4 14.592v-.35a3 3 0 0 1 .879-2.12L8 9m0 5V9"
      />
    </svg>
  );
};
export default Touch_08;

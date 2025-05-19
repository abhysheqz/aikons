import React from "react";
const TimeManagementCircle: React.FC<
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
        fillRule="evenodd"
        d="M6.75 6.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0m6.805-2.332a1 1 0 0 1 .277 1.387l-1 1.5a1 1 0 0 1-1.664-1.11l1-1.5a1 1 0 0 1 1.387-.277M3.5 15.999a3 3 0 0 1 3-2.999h11a3 3 0 0 1 3 3v.407A3.252 3.252 0 0 1 19.5 22.75a3.25 3.25 0 0 1-1-6.343V16a1 1 0 0 0-1-1H6.501a1 1 0 0 0-1 1v.407A3.252 3.252 0 0 1 4.5 22.75a3.25 3.25 0 0 1-.999-6.344z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TimeManagementCircle;

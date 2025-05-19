import React from "react";
const Hold_02: React.FC<
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
        d="M17.259 5.161a2.25 2.25 0 0 0-2.543-.703v5.096a.45.45 0 1 1-.9 0V3.74a2.24 2.24 0 0 0-1.315-.424 2.24 2.24 0 0 0-1.229.366v4.902a.45.45 0 0 1-.9 0V4.49a2.244 2.244 0 0 0-2.555.583v6.492a.45.45 0 1 1-.9 0V7.018L4.602 9.043a3.96 3.96 0 0 0-.594 5.309l3.244 4.458v1.256c0 .415.335.75.75.75h10a.75.75 0 0 0 .75-.75V18.83l.958-1.2a4.75 4.75 0 0 0 1.041-2.967V8.066a2.25 2.25 0 0 0-2.592-2.224v4.725a.45.45 0 0 1-.9 0z"
      />
    </svg>
  );
};
export default Hold_02;

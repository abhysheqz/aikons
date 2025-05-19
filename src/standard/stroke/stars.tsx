import React from "react";
const Stars: React.FC<
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
        d="M3 12c4.5 0 9-4.5 9-9 0 4.5 4.5 9 9 9-4.5 0-9 4.5-9 9 0-4.5-4.5-9-9-9M16 5a3 3 0 0 0 3-3 3 3 0 0 0 3 3 3 3 0 0 0-3 3 3 3 0 0 0-3-3M2 19.5A2.5 2.5 0 0 0 4.5 17 2.5 2.5 0 0 0 7 19.5 2.5 2.5 0 0 0 4.5 22 2.5 2.5 0 0 0 2 19.5"
      />
    </svg>
  );
};
export default Stars;

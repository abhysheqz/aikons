import React from "react";
const Watermelon: React.FC<
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
        strokeWidth={1.5}
        d="M4.998 15.972A7.763 7.763 0 0 0 15.972 4.998M21 10.326C21 16.22 16.22 21 10.326 21A10.64 10.64 0 0 1 3 18.089l5.777-5.778a2.5 2.5 0 0 0 4.12-2.524 2 2 0 0 0 .953-2.548l4.239-4.24a10.64 10.64 0 0 1 2.91 7.327Z"
      />
    </svg>
  );
};
export default Watermelon;

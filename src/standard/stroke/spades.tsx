import React from "react";
const Spades: React.FC<
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
        d="M8.737 20.289c.701-1.264 1.261-2.666 1.261-3.789-3 1-7-.5-7-3.5 0-5.609 5.243-9.47 8.378-10.766.4-.166.847-.166 1.246 0C15.758 3.53 21 7.39 21 13c0 3-4 4.5-7 3.5 0 1.115.83 2.506 1.667 3.762.395.593.068 1.383-.637 1.484-.88.126-2.019.254-3.03.254-.938 0-1.877-.11-2.609-.227-.683-.109-.989-.88-.653-1.484"
      />
    </svg>
  );
};
export default Spades;

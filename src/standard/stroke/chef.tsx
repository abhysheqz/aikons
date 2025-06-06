import React from "react";
const Chef: React.FC<
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
        d="M15.398 4.41A3.601 3.601 0 0 1 21 7.405 3.6 3.6 0 0 1 17.625 11H17m-1.602-6.59a3.602 3.602 0 0 0-6.796 0m6.796 0a3.6 3.6 0 0 1 .089 2.093m-5.769-.9A3.6 3.6 0 0 0 8.602 4.41m0 0A3.601 3.601 0 0 0 3 7.405 3.6 3.6 0 0 0 6.375 11H7M17 14v-4M7 14v-4M17 17v.454C17 19.965 14.761 22 12 22s-5-2.035-5-4.546V17"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M18 14.5c-1.599-.622-3.7-1-6-1s-4.4.378-6 1"
      />
    </svg>
  );
};
export default Chef;

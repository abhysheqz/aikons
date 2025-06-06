import React from "react";
const Crab: React.FC<
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
        d="M17 3c2.287 0 6.096 0 4.7 4.97m0 0c-1.333.167-3.176.53-3.684-1.97m3.685 1.97.091.73a3.97 3.97 0 0 1-1.595 3.69L18.016 14M7 3C4.713 3 .904 3 2.3 7.97m0 0c1.333.167 3.176.53 3.684-1.97M2.299 7.97l-.091.73a3.97 3.97 0 0 0 1.595 3.69L5.984 14M12.52 20.684C14.488 19.487 18 17.27 18 15.19c0-3.44-2.686-5.19-6-5.19s-6 1.75-6 5.19c0 2.08 3.513 4.297 5.48 5.494a1 1 0 0 0 1.04 0"
      />
      <path
        fill="currentColor"
        d="M3.342 20.64a.75.75 0 1 0 1.316.72zm16 .72a.75.75 0 1 0 1.316-.72zM9 18.25c-.716 0-1.79-.004-2.83.276-1.062.284-2.155.88-2.828 2.115l1.316.718c.418-.766 1.097-1.17 1.9-1.385.822-.22 1.703-.224 2.442-.224zm6 1.5c.739 0 1.62.004 2.442.224.803.216 1.482.62 1.9 1.385l1.316-.718c-.673-1.234-1.766-1.83-2.827-2.115-1.042-.28-2.115-.276-2.831-.276z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 16.5c-1 0-3-.5-4-2m16 2c1 0 3-.5 4-2M14 10l.5-1.5M10 10l-.5-1.5"
      />
    </svg>
  );
};
export default Crab;

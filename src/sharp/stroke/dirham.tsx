import React from "react";
const Dirham: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M22 12.001c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m15.69 9.001 1.47 1.703c.788.912.117 2.296-1.112 2.297H15M9 8.001v4.998"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.5 17.5H11m-1.5 0h-2m2 0c-.333-.333-.8-1.2 0-2 .633-.632 1.5.002 1.5.002"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={2}
        d="M12 13.001v.01"
      />
    </svg>
  );
};
export default Dirham;

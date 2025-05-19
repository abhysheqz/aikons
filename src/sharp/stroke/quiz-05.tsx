import React from "react";
const Quiz_05: React.FC<
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
        d="M8.5 7.5a2 2 0 1 1 3.683 1.08C11.585 9.51 10.5 10 10.5 10v1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 13.5h.009"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.25 2.5h-1.5A7.25 7.25 0 0 0 4 14.167L2.5 17.5 6.073 16c1.078.636 2.335 1 3.677 1h1.5a7.25 7.25 0 1 0 0-14.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.144 11.499c.231.708.356 1.465.356 2.25a7.22 7.22 0 0 1-1.5 4.417l1.5 3.334-3.573-1.5a7.2 7.2 0 0 1-3.677 1h-1.5a7.2 7.2 0 0 1-4.25-1.376"
      />
    </svg>
  );
};
export default Quiz_05;

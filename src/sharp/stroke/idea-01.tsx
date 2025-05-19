import React from "react";
const Idea_01: React.FC<
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
        d="M6.09 15a6.9 6.9 0 0 1-.59-2.794C5.5 8.502 8.41 5.5 12 5.5s6.5 3.002 6.5 6.706A6.9 6.9 0 0 1 17.91 15"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 16.5H8l.5 2.5h7zM14.5 19l-.5 3h-4l-.5-3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 2v1M22 12h-1M3 12H2M19.07 4.929l-.707.707M5.637 5.637 4.93 4.93"
      />
    </svg>
  );
};
export default Idea_01;

import React from "react";
const Course: React.FC<
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
        d="M7 3H3v18h17v-5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m10 9 .5 4s2 1 3.5 1 3.5-1 3.5-1l.5-4m2.5-1.5v3.77M14 4 7 7l7 3 7-3z"
      />
    </svg>
  );
};
export default Course;

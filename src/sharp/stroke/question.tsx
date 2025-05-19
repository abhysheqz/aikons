import React from "react";
const Question: React.FC<
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
        d="M10.242 12.256a2.747 2.747 0 1 0-5.495-.002 2.747 2.747 0 0 0 5.495.002Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.988 21.999H2.002c0-2.208 2.46-4.497 5.493-4.497s5.493 2.289 5.493 4.497"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M15.494 7.012h.008m2.992 0h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.98 12.01a5.01 5.01 0 0 0 5.018-5.004A5.01 5.01 0 0 0 16.98 2a5.01 5.01 0 0 0-5.018 5.005c0 1.71 1.034 3.242 1.988 3.97-.07.736-.427 1.517-.945 2.027-.092.09 1.238-.298 2.807-1.144.482.112.517.151 1.168.151Z"
      />
    </svg>
  );
};
export default Question;

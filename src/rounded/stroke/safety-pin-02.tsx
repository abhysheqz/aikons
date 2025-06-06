import React from "react";
const SafetyPin_02: React.FC<
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
        d="M13.546 3.794 12.293 5.41c-1.071 1.383 1.06 3.057 2.147 1.666l.374-.48c.693-.888 1.998-.978 2.783-.193s.694 2.09-.193 2.783l-.48.374c-1.391 1.087.283 3.218 1.666 2.147l1.616-1.253c2.226-1.725 2.409-5.031.39-7.05s-5.325-1.836-7.05.39"
      />
      <circle
        cx={4.5}
        cy={19.5}
        r={2.5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 17.41 7 5m-.41 16L17 12"
      />
    </svg>
  );
};
export default SafetyPin_02;

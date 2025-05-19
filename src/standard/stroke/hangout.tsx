import React from "react";
const Hangout: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.883 2C7.045 2 3.001 6.046 3 10.75c0 4.52 4.235 8.07 8.883 8.07V22C17.279 19.34 21 15.169 21 10.75 21 5.98 16.79 2 11.883 2Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 12c0 1-1 2-1.5 2v-2H13V8h4zM10.5 12c0 1-1 2-1.5 2v-2H6.5V8h4z"
      />
    </svg>
  );
};
export default Hangout;

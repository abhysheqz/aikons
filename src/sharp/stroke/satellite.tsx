import React from "react";
const Satellite: React.FC<
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
        d="m9 22-3-7-3 7z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4 9c0 5.523 4.477 10 10 10a9.97 9.97 0 0 0 7-2.859L6.859 2A9.97 9.97 0 0 0 4 9Z"
      />
      <circle cx={19} cy={4} r={2} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12.5 7.133 5.213-1.604-1.836 5"
      />
    </svg>
  );
};
export default Satellite;

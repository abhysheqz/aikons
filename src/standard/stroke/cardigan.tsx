import React from "react";
const Cardigan: React.FC<
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
        d="M6.5 16 5 21H2L3 6l6-3c1.418 1.595 4.583 1.595 6 0l6 3 1 15h-3l-1.5-5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6 9 1 10 1 2h8l1-2 1-10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.5 3.5S8.5 8 12 9m0 0v12m0-12c3.5-1 3.5-5.5 3.5-5.5"
      />
    </svg>
  );
};
export default Cardigan;

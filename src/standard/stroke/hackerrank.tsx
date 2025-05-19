import React from "react";
const Hackerrank: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.028 6.775S17.195 3.925 12 2.5C6.806 3.925 3.972 6.775 3.972 6.775S3.5 9.15 3.5 12s.472 5.225.472 5.225S6.806 20.075 12 21.5c5.195-1.425 8.028-4.275 8.028-4.275S20.5 14.85 20.5 12s-.472-5.225-.472-5.225Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M9.5 8v7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M9.5 12h5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 7.346 8 9h3zM14.5 16.654 16 15h-3z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M14.5 9v7"
      />
    </svg>
  );
};
export default Hackerrank;

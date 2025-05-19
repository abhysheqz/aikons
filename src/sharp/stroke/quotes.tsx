import React from "react";
const Quotes: React.FC<
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
        d="M10.5 12V8h-4v4zm0 0v1a3 3 0 0 1-3 3m10-4V8h-4v4zm0 0v1a3 3 0 0 1-3 3"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 21c5.521 0 9.998-4.253 9.998-9.5S17.52 2 12 2c-5.522 0-9.998 4.253-9.998 9.5 0 2.677 1.161 5.006 3.004 6.786L3.999 22l3.996-1.792c1.226.51 2.58.793 4.005.793Z"
      />
    </svg>
  );
};
export default Quotes;

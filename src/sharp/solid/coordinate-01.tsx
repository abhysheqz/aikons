import React from "react";
const Coordinate_01: React.FC<
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
        fill="currentColor"
        d="M10.207 5.207 6.5 1.5 2.793 5.207 4.207 6.62 5.5 5.328V22.5h2V5.328l1.293 1.293z"
      />
      <path
        fill="currentColor"
        d="m18.793 13.793-1.414 1.414 1.293 1.293H1.5v2h17.172l-1.293 1.293 1.414 1.414L22.5 17.5z"
      />
    </svg>
  );
};
export default Coordinate_01;

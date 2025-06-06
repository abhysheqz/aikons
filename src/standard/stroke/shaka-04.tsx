import React from "react";
const Shaka_04: React.FC<
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
        d="M7.511 10a1.5 1.5 0 1 1 2.998 0M7.51 10 6.265 3.883a1.643 1.643 0 0 0-3.249.49L6.512 21.5m1-11.5v2a1.5 1.5 0 1 0 2.997 0v-.5M13.506 9a1.5 1.5 0 1 1 2.998 0v2a1.5 1.5 0 1 1-2.998 0m0-2v2m0-2v.5a1.5 1.5 0 1 0-2.997 0v2m2.997-.5v.5a1.5 1.5 0 1 1-2.997 0m3.991 3 3.623-3.623a1.68 1.68 0 0 1 2.508.14c.48.602.493 1.455.032 2.072L16 18.54l.004 2.96"
      />
    </svg>
  );
};
export default Shaka_04;

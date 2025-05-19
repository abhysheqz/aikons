import React from "react";
const SmartPhone_04: React.FC<
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
        d="M19.048 16.492C20.254 15.34 21 13.75 21 11.992s-.746-3.348-1.952-4.5M17 9.742c.603.576.976 1.371.976 2.25s-.373 1.674-.976 2.25M11.5 2h-4L8 3h3z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 7V3.5A1.5 1.5 0 0 0 14.5 2h-10A1.5 1.5 0 0 0 3 3.5v17A1.5 1.5 0 0 0 4.5 22h10a1.5 1.5 0 0 0 1.5-1.5V17"
      />
    </svg>
  );
};
export default SmartPhone_04;

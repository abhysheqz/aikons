import React from "react";
const Kettle_01: React.FC<
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
        d="M7 7H3a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707L6 17"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6.668 9.323-.557 10.572A2 2 0 0 0 8.108 22h9.785a2 2 0 0 0 1.997-2.105l-.556-10.571C19.147 5.776 16.367 3 13.001 3S6.855 5.776 6.668 9.323Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.5 7H22c0 5-3.189 5-3.189 5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 17c0-3 2-2 2-5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 3V2"
      />
    </svg>
  );
};
export default Kettle_01;

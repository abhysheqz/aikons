import React from "react";
const GolfHole: React.FC<
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
        d="M8 17c-2.379.44-4 1.44-4 2.427C4 20.847 7.358 22 11.5 22s7.5-1.152 7.5-2.573c0-.988-1.621-1.996-4-2.427M11 12l7.462-4.56a1 1 0 0 0-.074-1.747l-5.927-2.97a1 1 0 0 0-1.448.893zm0 0v7"
      />
    </svg>
  );
};
export default GolfHole;

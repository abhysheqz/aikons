import React from "react";
const PermanentJob: React.FC<
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
        d="M7 9H5m6 0H9M7 6H5m6 0H9M19 15h-2m2-4h-2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 8v14h8V8zm0 0V2H2v8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 22H2c0-1.964 1.79-4 4-4s4 2.036 4 4"
      />
    </svg>
  );
};
export default PermanentJob;

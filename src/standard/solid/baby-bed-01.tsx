import React from "react";
const BabyBed_01: React.FC<
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
        fillRule="evenodd"
        d="M2.5 3a1 1 0 1 0 0 2H3v15a1 1 0 1 0 2 0v-1h14v1a1 1 0 1 0 2 0V5h.5a1 1 0 1 0 0-2H21a2 2 0 0 0-2 2v1H5V5a2 2 0 0 0-2-2zM19 14V8h-2v6zm-4 0V8h-2v6zm-4 0V8H9v6zm-4 0V8H5v6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BabyBed_01;

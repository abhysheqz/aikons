import React from "react";
const Plaxo: React.FC<
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
        d="M8 12a4 4 0 1 1 2.4 3.668v2.116A6 6 0 1 0 6 12v8.921A10.74 10.74 0 0 1 1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75c-1.414 0-2.764-.273-4-.769z"
      />
    </svg>
  );
};
export default Plaxo;

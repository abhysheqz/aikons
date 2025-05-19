import React from "react";
const Office: React.FC<
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
        d="M7 11H5m6 0H9M7 7H5m6 0H9m-4 8h2m2 0h2M19 15h-2m2-4h-2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 8V2H2v20h12m0-14h8v14h-8m0-14v14"
      />
    </svg>
  );
};
export default Office;

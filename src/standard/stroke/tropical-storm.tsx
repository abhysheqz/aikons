import React from "react";
const TropicalStorm: React.FC<
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
        d="M12.039 15a3.01 3.01 0 0 0 3.015-3c0-1.657-1.35-3-3.015-3a3.01 3.01 0 0 0-3.015 3c0 1.657 1.35 3 3.015 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m20 4.466-3.466 2.176A7.03 7.03 0 0 1 19 12c0 7.33-9.361 8.95-15 7.534l3.466-2.176A7.03 7.03 0 0 1 5 12c0-7.33 9.361-8.95 15-7.534"
      />
    </svg>
  );
};
export default TropicalStorm;

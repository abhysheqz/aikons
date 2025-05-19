import React from "react";
const RubElHizb: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m21.793 11.293-8.586-8.586a1 1 0 0 0-1.414 0l-8.586 8.586a1 1 0 0 0 0 1.414l8.586 8.586a1 1 0 0 0 1.414 0l8.586-8.586a1 1 0 0 0 0-1.414"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 19.5a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1z"
      />
      <circle
        cx={12.5}
        cy={12}
        r={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default RubElHizb;

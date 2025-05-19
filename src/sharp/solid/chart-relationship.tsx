import React from "react";
const ChartRelationship: React.FC<
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
        d="M18 6h-7V4h7zm-4.207 9.207-4.5-4.5 1.414-1.414 4.5 4.5zM4 18v-7h2v7z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.25 6.444a5.194 5.194 0 1 1 10.389 0 5.194 5.194 0 0 1-10.389 0M2.25 20a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M13.25 16a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M17.25 5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
    </svg>
  );
};
export default ChartRelationship;

import React from "react";
const GroupLayers: React.FC<
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
        d="M1.25 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M17.25 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M17.25 20a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M1.25 20a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 3h12v2H6zM3 18V6h2v12zm16 0V6h2v12zM6 19h12v2H6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.665 7.08a.75.75 0 0 1 .67 0l5 2.5a.75.75 0 0 1 0 1.34l-5 2.5a.75.75 0 0 1-.67 0l-5-2.5a.75.75 0 0 1 0-1.34z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m6.78 12.79 2.875-1.438L11 12.789l-1.649.857L12 14.971l2.649-1.325L13 12.79l1.345-1.437 2.875 1.437a.958.958 0 0 1 0 1.714L12.43 16.9a.96.96 0 0 1-.858 0L6.78 14.503a.958.958 0 0 1 0-1.714"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GroupLayers;

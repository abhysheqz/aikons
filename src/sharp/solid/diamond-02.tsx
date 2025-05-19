import React from "react";
const Diamond_02: React.FC<
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
        d="M22.595 8.457a.75.75 0 0 0-.009-.926L18.361 2.25H5.641L1.414 7.531a.75.75 0 0 0-.009.926l10.007 13a.75.75 0 0 0 1.189 0zM9.001 9h6V7H9z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Diamond_02;

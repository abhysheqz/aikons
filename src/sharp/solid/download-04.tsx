import React from "react";
const Download_04: React.FC<
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
        d="M13 4v7.586l1.293-1.293 1.414 1.414L12 15.414l-3.707-3.707 1.414-1.414L11 11.586V4zM5.67 18l-.773-2.316L3 16.316 4.228 20h15.544L21 16.316l-1.897-.632L18.33 18z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Download_04;

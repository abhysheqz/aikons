import React from "react";
const EditOff_03: React.FC<
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
        d="M2.543 2.543a1 1 0 0 1 1.414 0l17.5 17.5a1 1 0 0 1-1.414 1.414l-17.5-17.5a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m8.993 8.993-5.029 5.03c-.4.4-.667.914-.764 1.472L2.26 20.87a.75.75 0 0 0 .868.868l5.377-.939a2.75 2.75 0 0 0 1.472-.764l5.029-5.03zM16.775 13.239l1.702-1.702-6.014-6.013-1.702 1.702zM21.091 8.922l-1.554 1.554-6.013-6.013 1.554-1.554a2.25 2.25 0 0 1 3.182 0L21.09 5.74a2.25 2.25 0 0 1 0 3.182"
      />
    </svg>
  );
};
export default EditOff_03;

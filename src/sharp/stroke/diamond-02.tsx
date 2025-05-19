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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.972 7.953h6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18.017 3.003H5.973L2.002 7.951a.01.01 0 0 0 0 .012l10.001 13.03a.01.01 0 0 0 .016 0L22 7.964a.01.01 0 0 0 0-.012z"
      />
    </svg>
  );
};
export default Diamond_02;

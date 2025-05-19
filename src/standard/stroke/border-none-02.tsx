import React from "react";
const BorderNone_02: React.FC<
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
        d="M2.5 14v-4m19 0v4m0-7.75V5.5a3 3 0 0 0-3-3h-.75M10 2.5h4m-7.75 0H5.5a3 3 0 0 0-3 3v.75m19 11.5v.75a3 3 0 0 1-3 3h-.75m-7.75 0h4m-7.75 0H5.5a3 3 0 0 1-3-3v-.75"
      />
    </svg>
  );
};
export default BorderNone_02;

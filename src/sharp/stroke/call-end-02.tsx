import React from "react";
const CallEnd_02: React.FC<
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
        d="m8.994 17.004 3.002 2.994 3.001-2.994m-3.001-4.99v7.534M7.255 4.535l-.154 4.511-5.051 1.998a.01.01 0 0 1-.014-.01c-.149-2.276.123-3.876 1.253-4.69 1.476-1.061 4.217-2.208 8.01-2.296 1.473-.133 3.434.002 5.498.624m0 0c2.162.651 4.742 1.412 5.143 3.65.088.493.096 2.054-.079 2.762a.01.01 0 0 1-.01.006l-5.054-2.044z"
      />
    </svg>
  );
};
export default CallEnd_02;

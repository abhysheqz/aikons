import React from "react";
const OnlineLearning_01: React.FC<
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
        d="M8.47 3.055a6.25 6.25 0 0 1 6.963.01m-1.868 2.423a3.12 3.12 0 0 0-3.226-.01"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m11.967 9.448.044 12.556m0 0 8.956-2.533V6.966q-.001-.01-.011-.008l-9.072 2.544-8.907-2.59q-.01 0-.012.008v12.565z"
      />
    </svg>
  );
};
export default OnlineLearning_01;

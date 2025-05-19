import React from "react";
const Moon_02: React.FC<
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
        d="M10.516 2.043a.75.75 0 0 1 .067.81 7.807 7.807 0 0 0 10.564 10.564.75.75 0 0 1 1.083.832c-1.074 4.586-5.19 8.001-10.103 8.001-5.731 0-10.377-4.646-10.377-10.377 0-4.914 3.415-9.029 8-10.103a.75.75 0 0 1 .766.273"
      />
    </svg>
  );
};
export default Moon_02;

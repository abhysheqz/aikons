import React from "react";
const ContainerTruck_01: React.FC<
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
        d="M19.5 17.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM9.5 17.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M14.5 17.5h-5m10 0H22V13a6.5 6.5 0 0 0-6.5-6.5m-.5 9V4H2v13.5l2.5-.012"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.5 7v5m4-5v5"
      />
    </svg>
  );
};
export default ContainerTruck_01;

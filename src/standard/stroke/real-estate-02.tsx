import React from "react";
const RealEstate_02: React.FC<
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
        d="M22 22H2M21 8h-2m2 3h-2m2 3h-2M8 10a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v12H8zM11 13h2m-2 3h2M3.5 16c.828 0 1.5-.895 1.5-2s-.672-2-1.5-2-1.5.895-1.5 2 .672 2 1.5 2M3.5 16v5.826"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.027 8.848v-6.86a.01.01 0 0 1 .014-.01l7.346 2.834a1 1 0 0 1 .64.933v16.229"
      />
    </svg>
  );
};
export default RealEstate_02;

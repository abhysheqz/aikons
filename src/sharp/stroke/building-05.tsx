import React from "react";
const Building_05: React.FC<
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
        d="M1 22h22M21 9H11v13h10z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 22H3V2h12v7M3 6h4m-4 4h4m-4 4h4M14 13h4m-4 3h4M16 22v-3"
      />
    </svg>
  );
};
export default Building_05;

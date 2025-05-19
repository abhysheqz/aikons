import React from "react";
const MilkCarton: React.FC<
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
        d="M7 5.004V2h10.5v3.004L20 8v14H10m0-14v14m0-14L7 5 4 8v14h6m0-14h9.466M10 13l10 4"
      />
    </svg>
  );
};
export default MilkCarton;

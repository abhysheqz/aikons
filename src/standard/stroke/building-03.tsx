import React from "react";
const Building_03: React.FC<
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
        d="m16 10 3.743 1.497A2 2 0 0 1 21 13.354V22M8 9h3m-3 4h3M11.5 22v-4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4M1 22h22"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3 22V3a1 1 0 0 1 1.249-.968l10.989 2.82a1 1 0 0 1 .751.968L16 21.9"
      />
    </svg>
  );
};
export default Building_03;

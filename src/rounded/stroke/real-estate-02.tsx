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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 22V7.485c0-1.098 0-1.646-.316-2.11-.315-.463-.896-.767-2.059-1.376l-1.48-.774c-1.824-.956-2.737-1.434-3.44-1.138C13 2.383 13 3.245 13 4.967V9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 22H2M21 8h-2m2 3h-2m2 3h-2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 13c0-1.886 0-2.828.586-3.414S10.114 9 12 9s2.828 0 3.414.586S16 11.114 16 13v9H8z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M11.5 13h1m-1 3h1"
      />
      <ellipse
        cx={3.5}
        cy={14}
        stroke="currentColor"
        strokeWidth={1.5}
        rx={1.5}
        ry={2}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M3.5 16v6"
      />
    </svg>
  );
};
export default RealEstate_02;

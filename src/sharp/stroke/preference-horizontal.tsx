import React from "react";
const PreferenceHorizontal: React.FC<
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
        d="M16 2h-3v4h3zM11 9.5H8v4h3zM14 17h-3v4h3z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 4H3M11 19H3M21 19h-5M21 11.5H11M21 4h-3M6 11.5H3"
      />
    </svg>
  );
};
export default PreferenceHorizontal;

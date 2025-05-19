import React from "react";
const CursorAddSelection_02: React.FC<
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
        d="m3.6 3.03 15.118 5.815a.44.44 0 0 1-.02.83L12.14 11.86a.44.44 0 0 0-.28.278L9.675 18.7a.44.44 0 0 1-.83.018L3.03 3.6a.44.44 0 0 1 .57-.57Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 14v7m3.5-3.5h-7"
      />
    </svg>
  );
};
export default CursorAddSelection_02;

import React from "react";
const CursorRemoveSelection_02: React.FC<
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
        d="m3.6 4.03 15.117 5.815a.44.44 0 0 1-.018.83l-6.56 2.186a.44.44 0 0 0-.278.278L9.674 19.7a.44.44 0 0 1-.83.018L3.03 4.6a.44.44 0 0 1 .57-.57Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 18.5h-7"
      />
    </svg>
  );
};
export default CursorRemoveSelection_02;

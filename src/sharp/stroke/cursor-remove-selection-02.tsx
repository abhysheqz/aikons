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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m3 4 16 6.222-7.111 2.667L9.222 20zM21 18.5h-7"
      />
    </svg>
  );
};
export default CursorRemoveSelection_02;

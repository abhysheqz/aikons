import React from "react";
const CursorHold_02: React.FC<
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
        fill="currentColor"
        d="M1.47 1.47a.75.75 0 0 1 .767-.181l16 5.333a.75.75 0 0 1 0 1.423l-7.644 2.548-2.548 7.644a.75.75 0 0 1-1.423 0l-5.333-16a.75.75 0 0 1 .18-.767"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 11.25a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5m.082 7.082 2.5-2.5-1.414-1.414-2.5 2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CursorHold_02;

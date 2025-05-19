import React from "react";
const Invoice: React.FC<
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
        d="M18 8h4V4a2 2 0 0 0-2-2m-2 6V4a2 2 0 0 1 2-2m-2 6v14l-4-2-4 2-4-2-4 2V4a2 2 0 0 1 2-2h16"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 7.5c-1.105 0-2 .672-2 1.5s.895 1.5 2 1.5 2 .672 2 1.5-.895 1.5-2 1.5m0-6c.87 0 1.612.417 1.886 1M10 7.5V6m0 7.5c-.87 0-1.612-.417-1.886-1m1.886 1V15"
      />
    </svg>
  );
};
export default Invoice;

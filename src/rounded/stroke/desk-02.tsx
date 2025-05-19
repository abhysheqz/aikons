import React from "react";
const Desk_02: React.FC<
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
        d="M22 4H2M21 8H3M21 12h-7M21 16h-3c-1.886 0-2.828 0-3.414-.586S14 13.886 14 12V8M3 4v16M21 4v16"
      />
    </svg>
  );
};
export default Desk_02;

import React from "react";
const Candelier_02: React.FC<
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
        d="M2 3h20M12 3v14M19.5 3v8M4.5 3v8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M22 15s0-4-2.5-4-2.5 4-2.5 4zM7 15s0-4-2.5-4S2 15 2 15zM14.5 21s0-4-2.5-4-2.5 4-2.5 4z"
      />
    </svg>
  );
};
export default Candelier_02;

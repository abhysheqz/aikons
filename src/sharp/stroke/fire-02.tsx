import React from "react";
const Fire_02: React.FC<
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
        d="M12 22a7.5 7.5 0 0 0 7.5-7.5c0-1 0-3-2-5.5 0 0-.1 2.854-2.074 2.44-3.193-.667.93-6.937-4.926-9.44 0 5-6 6.5-6 12.5A7.5 7.5 0 0 0 12 22Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 19.001c1.933 0 3.5-2.015 3.5-4.5-3.2 1.2-4.333-1.563-4.5-3.501-1.446.553-2.5 2.826-2.5 4 0 2.485 1.567 4.001 3.5 4.001Z"
      />
    </svg>
  );
};
export default Fire_02;

import React from "react";
const DrawingMode: React.FC<
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
        fillRule="evenodd"
        d="M8.75 2.938a5.812 5.812 0 1 0 0 11.625.969.969 0 1 1 0 1.937 7.75 7.75 0 1 1 7.75-7.75.969.969 0 1 1-1.937 0A5.81 5.81 0 0 0 8.75 2.938"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.75 8h9a2.75 2.75 0 0 1 2.75 2.75v9a2.75 2.75 0 0 1-2.75 2.75h-9A2.75 2.75 0 0 1 8 19.75v-9A2.75 2.75 0 0 1 10.75 8"
      />
    </svg>
  );
};
export default DrawingMode;

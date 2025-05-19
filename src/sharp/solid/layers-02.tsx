import React from "react";
const Layers_02: React.FC<
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
        d="M10.25 2a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 .75.75v11a.75.75 0 0 1-.75.75H11a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        d="M9.25 5.75H6.5a.75.75 0 0 0-.75.75v11c0 .414.336.75.75.75h11a.75.75 0 0 0 .75-.75v-2.75h-9z"
      />
      <path
        fill="currentColor"
        d="M4.75 10.25H2a.75.75 0 0 0-.75.75v11c0 .414.336.75.75.75h11a.75.75 0 0 0 .75-.75v-2.75h-9z"
      />
    </svg>
  );
};
export default Layers_02;

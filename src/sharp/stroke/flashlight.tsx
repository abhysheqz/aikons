import React from "react";
const Flashlight: React.FC<
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
        d="M17 6V3H7v3m10 0a6 6 0 0 1-.79 2.977L15 11v10H9V11L7.79 8.977A6 6 0 0 1 7 6m10 0H7M12 13v2"
      />
    </svg>
  );
};
export default Flashlight;

import React from "react";
const RubiksCube: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="m21 12-9 5-9-5" />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m21 7-9-5-9 5m18 0-9 5-9-5m18 0v10l-9 5-9-5V7M12 22V12"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M16.5 19.5v-10l-9-5" />
      <path stroke="currentColor" strokeWidth={1.5} d="M7.5 19.5v-10l9-5" />
    </svg>
  );
};
export default RubiksCube;

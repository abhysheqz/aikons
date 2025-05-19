import React from "react";
const Directions_01: React.FC<
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
        d="M11 9.75H5.5L3 6l2.5-3.75H13v17.5h2v2H9v-2h2z"
      />
      <path fill="currentColor" d="M14.5 15.75h4L21 12l-2.5-3.75h-4z" />
    </svg>
  );
};
export default Directions_01;

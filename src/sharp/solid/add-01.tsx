import React from "react";
const Add_01: React.FC<
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
        d="M10.75 13.25V20h2.5v-6.75H20v-2.5h-6.75V4h-2.5v6.75H4v2.5z"
      />
    </svg>
  );
};
export default Add_01;

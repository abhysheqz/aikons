import React from "react";
const LayoutRow_3: React.FC<
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
        d="M22.5 7.5v-2a4 4 0 0 0-4-4h-13a4 4 0 0 0-4 4v2zM1.5 9.5v5h21v-5zM1.5 18.5v-2h21v2a4 4 0 0 1-4 4h-13a4 4 0 0 1-4-4"
      />
    </svg>
  );
};
export default LayoutRow_3;

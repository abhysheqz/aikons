import React from "react";
const LayoutRow_2: React.FC<
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
        d="M22.5 11V5.5a4 4 0 0 0-4-4h-13a4 4 0 0 0-4 4V11zM1.5 13v5.5a4 4 0 0 0 4 4h13a4 4 0 0 0 4-4V13z"
      />
    </svg>
  );
};
export default LayoutRow_2;

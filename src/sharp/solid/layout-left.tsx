import React from "react";
const LayoutLeft: React.FC<
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
        d="M8 2.25H3a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h5zM10 21.75h11a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75H10z"
      />
    </svg>
  );
};
export default LayoutLeft;

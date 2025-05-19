import React from "react";
const AspectRatio: React.FC<
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
        d="M2 2.25a.75.75 0 0 0-.75.75v5H17v13.75h5a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75z"
      />
      <path
        fill="currentColor"
        d="M15 21.75V10h-4v11.75zM9 21.75V10H1.25v11c0 .414.336.75.75.75z"
      />
    </svg>
  );
};
export default AspectRatio;

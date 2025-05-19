import React from "react";
const Comment_02: React.FC<
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
        strokeWidth={1.5}
        d="M22 2H2V17.96h4.003v4.03c0 .009.01.014.016.008l4.995-4.038H22z"
      />
    </svg>
  );
};
export default Comment_02;

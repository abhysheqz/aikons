import React from "react";
const Cancel_01: React.FC<
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
        fillRule="evenodd"
        d="M19.884 4.116a1.25 1.25 0 0 1 0 1.768l-14 14a1.25 1.25 0 0 1-1.768-1.768l14-14a1.25 1.25 0 0 1 1.768 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.116 4.116a1.25 1.25 0 0 1 1.768 0l14 14a1.25 1.25 0 0 1-1.768 1.768l-14-14a1.25 1.25 0 0 1 0-1.768"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Cancel_01;

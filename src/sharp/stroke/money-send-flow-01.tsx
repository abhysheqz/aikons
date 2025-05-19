import React from "react";
const MoneySendFlow_01: React.FC<
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
        d="M22 13v4h-4a4 4 0 0 1 4-4Zm0 0V3H2v10m0 0v4h4a4 4 0 0 0-4-4Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M22 7a4 4 0 0 1-4-4M2 7a4 4 0 0 0 4-4M12 17v4M15 17v2M9 17v2M15 10a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"
      />
    </svg>
  );
};
export default MoneySendFlow_01;

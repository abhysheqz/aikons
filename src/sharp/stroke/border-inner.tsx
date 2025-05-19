import React from "react";
const BorderInner: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 17v4h4m14-4v4h-4m4-14V3h-4M3 7V3h4M3 15V9m18 0v6M9 3h6m0 18H9M3 12h18m-9-9v18"
      />
    </svg>
  );
};
export default BorderInner;

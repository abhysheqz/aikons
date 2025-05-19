import React from "react";
const BorderHorizontal: React.FC<
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
        d="M7 3H3v4m4 14H3v-4m14 4h4v-4M17 3h4v4M9 3h6m0 18H9M21 9v6M3 15V9M12 9v3m0 0v3m0-3h9m-9 0H3m9 5v4m0-18v4"
      />
    </svg>
  );
};
export default BorderHorizontal;

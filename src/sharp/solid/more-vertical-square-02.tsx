import React from "react";
const MoreVerticalSquare_02: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18a.75.75 0 0 0 .75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm10.25 6.007V5.75h-2.5v2.507zm0 2.486v2.506h-2.5v-2.506zm0 5v2.507h-2.5v-2.507z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoreVerticalSquare_02;

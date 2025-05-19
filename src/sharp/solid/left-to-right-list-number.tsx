import React from "react";
const LeftToRightListNumber: React.FC<
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
        d="M21 7H11V5h10zM21 13H11v-2h10zM21 19H11v-2h10zM3 14h3.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75H4.5V20h3v1.5H3.75a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75H6v-1.5H3zM4.5 4h-.75V2.5h1.5a.75.75 0 0 1 .75.75V8.5h.75V10h-3V8.5h.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LeftToRightListNumber;

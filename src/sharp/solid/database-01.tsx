import React from "react";
const Database_01: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v8.25h19.5V3a.75.75 0 0 0-.75-.75zm18.75 10.5H2.25V21c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75zm-3.75-5h-7v-2h7zm-12-2h3v2H6zm5 12.5h7v-2h-7zm-2-2H6v2h3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Database_01;

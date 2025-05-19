import React from "react";
const Simcard_02: React.FC<
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
        d="M21 7v15H3V2h12zM7 10.25a.75.75 0 0 0-.75.75v7c0 .414.336.75.75.75h10a.75.75 0 0 0 .75-.75v-7a.75.75 0 0 0-.75-.75zm.75 3.5v-2h8.5v2H14.5v1.5h1.75v2h-8.5v-2H9.5v-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Simcard_02;

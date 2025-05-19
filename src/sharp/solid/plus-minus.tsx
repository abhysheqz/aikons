import React from "react";
const PlusMinus: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v10c0 .414.336.75.75.75h10a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm5.75 5v-2h-1.5v2h-2v1.5h2v2h1.5v-2h2v-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.25 21v-6.25H13A1.75 1.75 0 0 0 14.75 13v-2.75H21a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-.75.75H11a.75.75 0 0 1-.75-.75m3-4.25h5.5v-1.5h-5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PlusMinus;

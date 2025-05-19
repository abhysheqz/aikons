import React from "react";
const Jsx_02: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m4 12.998.02-9.002A2 2 0 0 1 6.022 2l6.974.008L20 8.995l-.008 4.003M13 2.498v4.5a2 2 0 0 0 2 2h4.5M7 16v4.25a1.75 1.75 0 0 1-3.5 0V20m10-4h-3v3h3v3h-3m6-6 2 3m0 0 2 3m-2-3 2-3m-2 3-2 3"
      />
    </svg>
  );
};
export default Jsx_02;

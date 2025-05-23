import React from "react";
const Ppt_01: React.FC<
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
        d="m4 12.998.02-9.003A2 2 0 0 1 6.022 2l6.974.008L20 8.995l-.008 4.003M13 2.498v4.5a2 2 0 0 0 2 2h4.5M4 22v-3m0 0v-3h2a1.5 1.5 0 0 1 0 3zm6 3v-3m0 0v-3h2a1.5 1.5 0 0 1 0 3zm6-3h2m0 0h2m-2 0v6"
      />
    </svg>
  );
};
export default Ppt_01;

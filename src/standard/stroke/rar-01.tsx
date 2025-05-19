import React from "react";
const Rar_01: React.FC<
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
        d="m4 12.998.02-9.002A2 2 0 0 1 6.022 2l6.974.008L20 8.995l-.008 4.003M13 2.498v4.5a2 2 0 0 0 2 2h4.5M4 19v-3h2a1.5 1.5 0 0 1 0 3h-.5M4 19v3m0-3h1.5m0 0 2 3m9-3v-3h2a1.5 1.5 0 0 1 0 3H18m-1.5 0v3m0-3H18m0 0 2 3m-10 0 1.75-6h.5L14 22m-3-2h2"
      />
    </svg>
  );
};
export default Rar_01;

import React from "react";
const Plug_02: React.FC<
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
        d="M14 8v3m-4 0V8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.003 12.027C7.958 11.473 8.426 11 9.02 11h5.96c.594 0 1.062.473 1.017 1.027l-.123 1.513a6.1 6.1 0 0 1-1.12 3.046l-.4.563a2.08 2.08 0 0 1-1.698.851h-1.312a2.08 2.08 0 0 1-1.698-.851l-.4-.563a6.1 6.1 0 0 1-1.12-3.046z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 21.21c3.532-1.546 6-5.078 6-9.188C22 6.487 17.523 2 12 2S2 6.487 2 12.022c0 5.198 3.947 9.471 9.001 9.974.55.054.999-.4.999-.953v-3.007"
      />
    </svg>
  );
};
export default Plug_02;

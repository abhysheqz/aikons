import React from "react";
const Touchpad_02: React.FC<
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
        strokeWidth={1.5}
        d="m11.353 14.144 1.826 1.618v-8.35c0-.78.623-1.412 1.393-1.412s1.393.632 1.394 1.411l.003 5.177h3.71c1.282 0 2.321 1.054 2.321 2.353v4.706c0 1.3-1.04 2.353-2.321 2.353h-6.036l-4.324-5.82a1.496 1.496 0 0 1-.007-1.839 1.4 1.4 0 0 1 2.04-.197Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 10V2H2v15.998h5"
      />
    </svg>
  );
};
export default Touchpad_02;

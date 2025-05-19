import React from "react";
const Lamp_04: React.FC<
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
        d="M12.005 19a1.503 1.503 0 1 0 0-3.003c-.831 0-1.505.672-1.505 1.501 0 .83.674 1.501 1.505 1.501Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.005 15.995v-4.003m0 10.008v-3.002M7.994 22h8.022"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.92 11.952H7.085c-.066 0-1.977.085-2.08.008q-.006-.007-.001-.017L8.989 2h6.03l3.972 9.89c.015.037.01.062-.03.062z"
      />
    </svg>
  );
};
export default Lamp_04;

import React from "react";
const UmbrellaDollar: React.FC<
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
        d="M12 3.5V2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 3.5c4.97 0 9 3.477 9 9H3c0-5.523 4.03-9 9-9Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 3.5c2.21 0 4 3.477 4 9H8c0-5.523 1.79-9 4-9Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 12.5v8a1.5 1.5 0 0 1-3 0V20M17.5 16c-.828 0-1.5.56-1.5 1.25s.672 1.25 1.5 1.25 1.5.56 1.5 1.25S18.328 21 17.5 21m0-5c.49 0 .926.196 1.2.5m-1.2-.5v-1m0 6c-.49 0-.926-.196-1.2-.5m1.2.5v1"
      />
    </svg>
  );
};
export default UmbrellaDollar;

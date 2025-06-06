import React from "react";
const PenConnectWifi: React.FC<
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
        d="m17 8 3 3m-1.594-4.383L7.964 17.058a4.96 4.96 0 0 0-1.305 2.306L6 22l2.636-.66a4.96 4.96 0 0 0 2.306-1.304L21.383 9.594a2.106 2.106 0 0 0-2.977-2.977"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M7.491 10H7.5M13 4.416C11.592 2.923 9.648 2 7.5 2S3.408 2.923 2 4.416m2.75 2.917A3.77 3.77 0 0 1 7.5 6.125c1.074 0 2.046.462 2.75 1.208"
      />
    </svg>
  );
};
export default PenConnectWifi;

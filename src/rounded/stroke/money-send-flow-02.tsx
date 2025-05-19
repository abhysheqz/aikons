import React from "react";
const MoneySendFlow_02: React.FC<
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
        d="M14.5 10.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 16.658c.844.057 1.57.157 2.176.271 1.096.207 2.324-.632 2.324-1.747V5.427c0-.568-.324-1.082-.867-1.25C20.19 3.883 18.479 3.5 16 3.5c-4.58 0-5.803 1.677-12.122.424C2.921 3.734 2 4.445 2 5.42v10.017c0 .688.473 1.293 1.145 1.441 1.301.287 2.399.457 3.355.545"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 7.5c1.951 0 3.705-1.595 3.929-3.246M18.5 4c0 2.04 1.765 3.969 3.5 3.969m0 5.531c-1.9 0-3.74 1.31-3.898 3.098M6 16.996a4 4 0 0 0-4-4M12 16.5v4m3-4v2m-6-2v2"
      />
    </svg>
  );
};
export default MoneySendFlow_02;

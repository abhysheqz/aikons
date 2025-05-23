import React from "react";
const Swimming: React.FC<
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
        d="M8.932 4.835a2 2 0 0 1 1.515 1.149L15 16c-2.167 0-2.826-1.164-5.087-2.329C8.104 12.74 5.753 12.806 5 13l2.899-2.07a1 1 0 0 0 .367-1.13l-.57-1.711a1 1 0 0 0-.81-.675L3.182 6.9A1.45 1.45 0 0 1 2 5.461c0-.89.774-1.573 1.639-1.446z"
      />
      <circle
        cx={19}
        cy={10}
        r={3}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 18.05c1.056-3.53 5.769-1.825 9.5.084 3.732 1.91 7.5 3.04 9.5-.084"
      />
    </svg>
  );
};
export default Swimming;

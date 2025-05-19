import React from "react";
const CreditCardNotFound: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m2.001 2 19.988 20"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4.014 3.994H2.01a.01.01 0 0 0-.01.01v15.988q.001.01.01.01h18.005M7.19 4.006h14.8a.01.01 0 0 1 .01.01v14.808M2.63 8.996h6.426m3.132 0h9.155"
      />
    </svg>
  );
};
export default CreditCardNotFound;

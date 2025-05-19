import React from "react";
const CreditCardChange: React.FC<
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
        d="M22 9.995V2.499H2V18.49h9M2 7.496h20"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m19.504 11.48 1.498 1.996v.502h-7.01a.01.01 0 0 0-.01.01v2.503m1.506 5.01-1.497-1.995v-.503h7.008a.01.01 0 0 0 .01-.01v-2.502"
      />
    </svg>
  );
};
export default CreditCardChange;

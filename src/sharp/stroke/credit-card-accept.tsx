import React from "react";
const CreditCardAccept: React.FC<
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
        d="M22 11V4H2v16h9M2 9h20"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m14 18 2 2 6-6" />
    </svg>
  );
};
export default CreditCardAccept;

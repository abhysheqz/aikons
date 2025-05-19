import React from "react";
const CreditCardNotAccept: React.FC<
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
        d="M22 11V4H2v16h11M2 9h20M22 14l-6 6m6 0-6-6"
      />
    </svg>
  );
};
export default CreditCardNotAccept;

import React from "react";
const CreditCardDefrost: React.FC<
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
        d="M22 10.5v-7H2v16h10M2 8.5h20"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.016 12.5c-3.17 2.794 2.304 4.752 0 8m3.2-8c-3.17 2.794 2.303 4.752 0 8m3.2-8c-3.17 2.794 2.303 4.752 0 8"
      />
    </svg>
  );
};
export default CreditCardDefrost;

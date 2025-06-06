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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 8h20M11 19H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.016 13c-3.17 2.794 2.304 4.752 0 8m3.2-8c-3.17 2.794 2.303 4.752 0 8m3.2-8c-3.17 2.794 2.303 4.752 0 8"
      />
    </svg>
  );
};
export default CreditCardDefrost;

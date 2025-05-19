import React from "react";
const LoyaltyCard: React.FC<
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
        d="M22 3.5H2v17h20z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M11.9 10.748c-1.397-.713-2.4.339-2.4.339s-1.003-1.052-2.4-.339c-1.692.865-1.814 4.25 2.4 5.752 4.214-1.503 4.092-4.887 2.4-5.752Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 16.5h-5"
      />
    </svg>
  );
};
export default LoyaltyCard;

import React from "react";
const CreditCard: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 4A.75.75 0 0 1 2 3.25h20a.75.75 0 0 1 .75.75v4.25H1.25zm0 5.75h21.5V20a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75zm9.75 7h2v-1.5h-2zm4 0h4v-1.5h-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CreditCard;

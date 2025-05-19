import React from "react";
const ReverseWithdrawal_01: React.FC<
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
        d="M6 6.25a.75.75 0 0 0-.748.697l-1 14A.75.75 0 0 0 5 21.75h14a.75.75 0 0 0 .748-.803l-1-14A.75.75 0 0 0 18 6.25zm6.75 9.44V9.75h-1.5v5.94L9.5 13.94 8.44 15 12 18.56 15.56 15l-1.06-1.06z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 3.25a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2v-2h1v-6H3v6h1v2H2a1 1 0 0 1-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ReverseWithdrawal_01;

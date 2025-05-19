import React from "react";
const PaymentSuccess_01: React.FC<
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
        d="M21.043 13.043a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.338.069l-.076-.069-2-2-.068-.076a1 1 0 0 1 1.406-1.406l.076.068 1.293 1.293z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20 3.25A2.75 2.75 0 0 1 22.75 6v5.737c-.811-.396-1.864-.325-2.419.266l-4.58 4.563-.75-.688c-.501-.54-1.91-.503-2.68.134-.814.81-.991 1.89-.58 2.738H4A2.75 2.75 0 0 1 1.25 16V6A2.75 2.75 0 0 1 4 3.25zM2.75 16c0 .69.56 1.25 1.25 1.25h1.93a4 4 0 0 0-3.18-3.18zM12 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4.75c-.69 0-1.25.56-1.25 1.25v1.93a4 4 0 0 0 3.18-3.18zm14.07 0a4 4 0 0 0 3.18 3.18V6c0-.69-.56-1.25-1.25-1.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PaymentSuccess_01;

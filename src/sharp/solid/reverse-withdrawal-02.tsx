import React from "react";
const ReverseWithdrawal_02: React.FC<
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
        d="M4.25 14a7.75 7.75 0 1 1 15.5 0 7.75 7.75 0 0 1-15.5 0m8.5-3.665V9.25h-1.5v1.084a2.95 2.95 0 0 0-1.114.505c-.504.378-.886.958-.886 1.661s.382 1.283.886 1.66c.504.379 1.165.59 1.864.59.406 0 .744.124.964.29.22.164.286.335.286.46s-.066.296-.286.46c-.22.166-.558.29-.964.29-.668 0-1.09-.321-1.208-.57l-1.357.64c.33.7 1.026 1.165 1.815 1.346v1.084h1.5v-1.084a2.95 2.95 0 0 0 1.114-.505c.504-.378.886-.958.886-1.661s-.382-1.283-.886-1.66c-.504-.379-1.165-.59-1.864-.59-.406 0-.744-.124-.964-.29-.22-.164-.286-.335-.286-.46s.066-.296.286-.46c.22-.166.558-.29.964-.29.668 0 1.09.321 1.208.57l1.357-.64c-.33-.7-1.026-1.165-1.815-1.345"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 8H5V6h14z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2 2.25a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1.17c.138-.7.357-1.37.646-2H3v-6h18v6h-.816c.29.63.508 1.3.646 2H22a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1z"
      />
    </svg>
  );
};
export default ReverseWithdrawal_02;

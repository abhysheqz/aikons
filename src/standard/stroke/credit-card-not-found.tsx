import React from "react";
const CreditCardNotFound: React.FC<
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
        d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16m2-2V6a2 2 0 0 0-2-2H8"
      />
      <path
        fill="currentColor"
        d="M13 8.25a.75.75 0 0 0 0 1.5zm0 1.5h9v-1.5h-9zm-11 0h7v-1.5H2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m2 2 20 20"
      />
    </svg>
  );
};
export default CreditCardNotFound;

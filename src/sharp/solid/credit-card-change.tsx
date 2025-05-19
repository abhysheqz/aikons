import React from "react";
const CreditCardChange: React.FC<
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
        d="m20.1 12.348 1.65 2.196v1.502h-7v1.752h-1.5v-2.502a.75.75 0 0 1 .75-.75h5.875l-.975-1.297zm1.65 5.45v2.5a.75.75 0 0 1-.75.75h-5.875l.975 1.3-1.2.9-1.65-2.2v-1.5h7v-1.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.25 2.5A.75.75 0 0 1 2 1.75h20a.75.75 0 0 1 .75.75v4.25H1.25zM1.25 8.25h21.5v5.127l-2.352-3.13-3.718 2.798H14a2.25 2.25 0 0 0-2.25 2.25v3.955H2a.75.75 0 0 1-.75-.75z"
      />
    </svg>
  );
};
export default CreditCardChange;

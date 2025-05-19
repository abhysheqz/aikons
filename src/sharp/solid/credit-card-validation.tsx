import React from "react";
const CreditCardValidation: React.FC<
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
        d="M9.75 7c0-.603.074-1.19.213-1.75H2a.75.75 0 0 0-.75.75v4.25h9.268A7.2 7.2 0 0 1 9.75 7M17 14.25a7.23 7.23 0 0 1-5.477-2.5H1.25V22c0 .414.336.75.75.75h20a.75.75 0 0 0 .75-.75V11.75h-.273A7.23 7.23 0 0 1 17 14.25m-7 4.5h2v-1.5h-2zm4 0h4v-1.5h-4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 1.25a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5m2.78 4.78-1.06-1.06-2.47 2.47-.97-.97-1.06 1.06 2.03 2.03z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CreditCardValidation;

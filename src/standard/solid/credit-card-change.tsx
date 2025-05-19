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
        d="M19.65 11.95a1 1 0 0 1 1.4.2l1.5 2a1 1 0 0 1-.8 1.6h-6a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1h5l-.3-.4a1 1 0 0 1 .2-1.4m2.1 4.8a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5l.3.4a1 1 0 0 1-1.6 1.2l-1.5-2a1 1 0 0 1 .8-1.6h6a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1 4.75A2.75 2.75 0 0 1 3.75 2h16a2.75 2.75 0 0 1 2.75 2.75V7H1zM1 8.5h21.5v3.083l-.25-.333a2.5 2.5 0 0 0-4.45 1h-3.05a2.5 2.5 0 0 0-2.5 2.5v1c0 .563.186 1.082.5 1.5a2.5 2.5 0 0 0-.385 2.25H3.75A2.75 2.75 0 0 1 1 16.75z"
      />
    </svg>
  );
};
export default CreditCardChange;

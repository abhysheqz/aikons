import React from "react";
const Payment_02: React.FC<
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
        d="M1.25 4.5A.75.75 0 0 1 2 3.75h6.48a4.75 4.75 0 0 1 3.155 1.2l3.15 2.8H20a2.75 2.75 0 0 1 2.75 2.75v7A2.75 2.75 0 0 1 20 20.25H7a2.75 2.75 0 0 1-2.75-2.75v-3.25H2a.75.75 0 0 1 0-1.5h2.25V11.3a3.2 3.2 0 0 1-.897-.473L3.05 10.6a.75.75 0 1 1 .9-1.2l.303.227c.675.507 1.62.44 2.217-.157a.75.75 0 0 1 1.06 0l1.5 1.5a.664.664 0 1 0 .94-.94l-2-2a.75.75 0 0 1 1.06-1.06l.78.78h2.717l-1.889-1.68a3.25 3.25 0 0 0-2.159-.82H2a.75.75 0 0 1-.75-.75M13.5 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Payment_02;

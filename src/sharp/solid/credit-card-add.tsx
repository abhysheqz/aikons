import React from "react";
const CreditCardAdd: React.FC<
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
        d="M19.5 17.5V20h-2v-2.5H15v-2h2.5V13h2v2.5H22v2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.25 4A.75.75 0 0 1 2 3.25h20a.75.75 0 0 1 .75.75v4.25H1.25zM1.25 9.75h21.5V14H21v-2.5h-5V14h-2.5v5H16v1.75H2a.75.75 0 0 1-.75-.75z"
      />
    </svg>
  );
};
export default CreditCardAdd;

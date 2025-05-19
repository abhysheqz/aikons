import React from "react";
const CreditCardNotAccept: React.FC<
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
        d="M1.25 3.5A.75.75 0 0 1 2 2.75h20a.75.75 0 0 1 .75.75v4.25H1.25zM1.25 9.25h21.5v3.878l-1.414-1.414-2.293 2.293-2.293-2.293-3.535 3.536 2.293 2.293-2.293 2.293.414.414H1.999a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m20.457 17.543 2.293 2.293-1.414 1.414-2.293-2.293-2.293 2.293-1.414-1.414 2.293-2.293-2.293-2.293 1.414-1.414 2.293 2.293 2.293-2.293 1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CreditCardNotAccept;

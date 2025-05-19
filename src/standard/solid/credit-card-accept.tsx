import React from "react";
const CreditCardAccept: React.FC<
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
        d="M22.39 12.982a1 1 0 0 1 .128 1.408l-5 6a1 1 0 0 1-1.475.067l-2.5-2.5a1 1 0 0 1 1.414-1.414l1.726 1.726 4.299-5.16a1 1 0 0 1 1.408-.127"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1 5.75A2.75 2.75 0 0 1 3.75 3h16a2.75 2.75 0 0 1 2.75 2.75V8H1zM1 9.5h21.5v1.864a2.5 2.5 0 0 0-2.67.786l-3.248 3.897-.564-.565a2.5 2.5 0 1 0-3.536 3.536l1.482 1.482H3.75A2.75 2.75 0 0 1 1 17.75z"
      />
    </svg>
  );
};
export default CreditCardAccept;

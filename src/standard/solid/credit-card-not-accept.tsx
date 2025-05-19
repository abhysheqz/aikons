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
        fillRule="evenodd"
        d="M15.043 13.043a1 1 0 0 1 1.414 0l2.293 2.293 2.293-2.293a1 1 0 0 1 1.414 1.414l-2.293 2.293 2.293 2.293a1 1 0 0 1-1.414 1.414l-2.293-2.293-2.293 2.293a1 1 0 0 1-1.414-1.414l2.293-2.293-2.293-2.293a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1 5.75A2.75 2.75 0 0 1 3.75 3h16a2.75 2.75 0 0 1 2.75 2.75V8H1zM1 9.5h21.5v1.865a2.5 2.5 0 0 0-2.518.617l-1.232 1.233-1.232-1.233a2.5 2.5 0 0 0-3.536 3.536l1.233 1.232-1.233 1.232a2.5 2.5 0 0 0-.617 2.518H3.75A2.75 2.75 0 0 1 1 17.75z"
      />
    </svg>
  );
};
export default CreditCardNotAccept;

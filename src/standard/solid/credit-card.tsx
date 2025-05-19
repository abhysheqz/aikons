import React from "react";
const CreditCard: React.FC<
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
        d="M1 5.75A2.75 2.75 0 0 1 3.75 3h16a2.75 2.75 0 0 1 2.75 2.75V8H1zM1 9.5h21.5v8.25a2.75 2.75 0 0 1-2.75 2.75h-16A2.75 2.75 0 0 1 1 17.75zM9.75 15a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zm4.5 0a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CreditCard;

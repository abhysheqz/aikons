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
        d="M18.25 11.75a1 1 0 0 1 1 1v2.5h2.5a1 1 0 1 1 0 2h-2.5v2.5a1 1 0 1 1-2 0v-2.5h-2.5a1 1 0 1 1 0-2h2.5v-2.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1 5.75A2.75 2.75 0 0 1 3.75 3h16a2.75 2.75 0 0 1 2.75 2.75V8H1zM1 9.5h21.5v4.365a2.5 2.5 0 0 0-.75-.115h-1v-1a2.5 2.5 0 0 0-5 0v1h-1a2.5 2.5 0 0 0 0 5h1v1q.002.393.114.75H3.75A2.75 2.75 0 0 1 1 17.75z"
      />
    </svg>
  );
};
export default CreditCardAdd;

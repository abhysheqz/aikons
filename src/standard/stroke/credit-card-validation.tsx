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
        d="M15.53 6.97a.75.75 0 1 0-1.06 1.06zM16.5 9l-.53.53a.75.75 0 0 0 1.106-.05zm3.076-2.52a.75.75 0 0 0-1.152-.96zM22.75 7.5A5.75 5.75 0 0 0 17 1.75v1.5a4.25 4.25 0 0 1 4.25 4.25zM17 1.75a5.75 5.75 0 0 0-5.75 5.75h1.5A4.25 4.25 0 0 1 17 3.25zM11.25 7.5A5.75 5.75 0 0 0 17 13.25v-1.5a4.25 4.25 0 0 1-4.25-4.25zM17 13.25a5.75 5.75 0 0 0 5.75-5.75h-1.5A4.25 4.25 0 0 1 17 11.75zm-2.53-5.22 1.5 1.5 1.06-1.06-1.5-1.5zm2.606 1.45 2.5-3-1.152-.96-2.5 3z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M11.5 17.5h1m3 0h3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 10.5h7.5M8.5 5.5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V14"
      />
    </svg>
  );
};
export default CreditCardValidation;

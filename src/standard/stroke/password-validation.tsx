import React from "react";
const PasswordValidation: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 18.5H4a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"
      />
      <path
        fill="currentColor"
        d="M15.53 15.97a.75.75 0 1 0-1.06 1.06zM16.5 18l-.53.53a.75.75 0 0 0 1.106-.05zm3.076-2.52a.75.75 0 0 0-1.152-.96zm3.174 1.02A5.75 5.75 0 0 0 17 10.75v1.5a4.25 4.25 0 0 1 4.25 4.25zM17 10.75a5.75 5.75 0 0 0-5.75 5.75h1.5A4.25 4.25 0 0 1 17 12.25zm-5.75 5.75A5.75 5.75 0 0 0 17 22.25v-1.5a4.25 4.25 0 0 1-4.25-4.25zM17 22.25a5.75 5.75 0 0 0 5.75-5.75h-1.5A4.25 4.25 0 0 1 17 20.75zm-2.53-5.22 1.5 1.5 1.06-1.06-1.5-1.5zm2.606 1.45 2.5-3-1.152-.96-2.5 3z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6 6.5 4.992 2.912a2 2 0 0 0 2.016 0L18 6.5"
      />
    </svg>
  );
};
export default PasswordValidation;

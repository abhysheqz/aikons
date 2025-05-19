import React from "react";
const MailUnlock_02: React.FC<
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
        d="M1 4.75A2.75 2.75 0 0 1 3.75 2h16a2.75 2.75 0 0 1 2.75 2.75v8.378a2 2 0 0 0-.287-.08 2.24 2.24 0 0 0-.283-1.425 4.249 4.249 0 0 0-7.882 1.489A2.25 2.25 0 0 0 12.5 15.25v4.25H3.75A2.75 2.75 0 0 1 1 16.75zm4.102 1.622a.75.75 0 0 1 1.026-.27l4.992 2.912c.39.227.87.227 1.26 0l4.992-2.912a.75.75 0 0 1 .756 1.296l-4.992 2.912c-.856.5-1.915.5-2.771 0L5.371 7.398a.75.75 0 0 1-.27-1.026"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.25 12.5c-.69 0-1.25.56-1.25 1.25v.75h4.75a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75v-5.5a.75.75 0 0 1 .75-.75h.75v-.75a2.75 2.75 0 0 1 5.132-1.376.75.75 0 1 1-1.299.752 1.25 1.25 0 0 0-1.083-.626"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailUnlock_02;

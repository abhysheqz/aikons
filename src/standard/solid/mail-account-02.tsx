import React from "react";
const MailAccount_02: React.FC<
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
        d="M1 4.75A2.75 2.75 0 0 1 3.75 2h16a2.75 2.75 0 0 1 2.75 2.75v8.75h-.248a4 4 0 1 0-7.165 2.448 5.76 5.76 0 0 0-2.45 3.552H3.75A2.75 2.75 0 0 1 1 16.75zm4.102 1.622a.75.75 0 0 1 1.026-.27l4.992 2.912c.39.227.87.227 1.26 0l4.992-2.912a.75.75 0 0 1 .756 1.296l-4.992 2.912c-.856.5-1.915.5-2.771 0L5.371 7.398a.75.75 0 0 1-.27-1.026"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.75 13.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M14 20.75a4.25 4.25 0 0 1 4.252-4.25 4.25 4.25 0 0 1 4.251 4.25.75.75 0 0 1-.75.75H14.75a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailAccount_02;

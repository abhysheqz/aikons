import React from "react";
const MailAtSign_02: React.FC<
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
        d="M1 4.75A2.75 2.75 0 0 1 3.75 2h16a2.75 2.75 0 0 1 2.75 2.75v7.563A6.5 6.5 0 0 0 11.859 19.5H3.75A2.75 2.75 0 0 1 1 16.75zm4.102 1.622a.75.75 0 0 1 1.026-.27l4.992 2.912c.39.227.87.227 1.26 0l4.992-2.912a.75.75 0 0 1 .756 1.296l-4.992 2.912c-.856.5-1.915.5-2.771 0L5.371 7.398a.75.75 0 0 1-.27-1.026"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.75 13.75a3 3 0 1 0 0 6 1 1 0 1 1 0 2 5 5 0 1 1 5-5v.444a2.333 2.333 0 0 1-3.979 1.655 2.333 2.333 0 1 1 1.312-2.099v.444a.333.333 0 0 0 .667 0v-.444a3 3 0 0 0-3-3m.333 3a.333.333 0 1 0-.666 0 .333.333 0 0 0 .666 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailAtSign_02;

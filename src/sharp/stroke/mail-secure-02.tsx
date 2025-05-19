import React from "react";
const MailSecure_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 11.5v-9H2v17h10"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m6 6.992 6 3.992 6-3.992"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 16.997v-2.5c-2 0-3.5-1-3.5-1s-1.5 1-3.5 1v2.5c0 3.5 3.5 4.5 3.5 4.5s3.5-1 3.5-4.5Z"
      />
    </svg>
  );
};
export default MailSecure_02;

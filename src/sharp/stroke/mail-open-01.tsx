import React from "react";
const MailOpen_01: React.FC<
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
        d="m2 8.508 8 6.007m12-6.007-8 6.007"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m2 21.023 10-7.51 10 7.51"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m2.021 8.485 9.949-5.986a.01.01 0 0 1 .01 0L21.99 8.5v12.987a.01.01 0 0 1-.01.01H2.03a.01.01 0 0 1-.01-.01z"
      />
    </svg>
  );
};
export default MailOpen_01;

import React from "react";
const MailOpen_02: React.FC<
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
        strokeWidth={1.5}
        d="m2 8.507 5.5 5.507h9L22 8.507"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m2 8.499 9.948-5.986a.01.01 0 0 1 .01 0l10.01 6.003v12.986a.01.01 0 0 1-.01.01H2.01a.01.01 0 0 1-.01-.01z"
      />
    </svg>
  );
};
export default MailOpen_02;

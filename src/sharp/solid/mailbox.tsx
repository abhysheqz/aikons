import React from "react";
const Mailbox: React.FC<
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
        d="M2.5 17.75h19v5h-19zm2 2v1h15v-1z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.5 8.75v10.5h15V8.75h2v-2h-2.27a7.503 7.503 0 0 0-14.46 0H2.5v2zm12.625-2H6.875a5.502 5.502 0 0 1 10.25 0m-6.625 5v-2h3v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mailbox;

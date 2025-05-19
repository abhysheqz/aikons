import React from "react";
const Mailbox_01: React.FC<
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
        d="M6 9.011h3M17.5 9.011V2H21"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12.5 18v-7c0-.929 0-1.394-.061-1.782a5 5 0 0 0-4.156-4.156 4 4 0 0 0-.26-.032"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 18.026h9v-8.013a5.004 5.004 0 0 0-5-5.008h-9"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.494 22.005v-4.003m0 0v-8.28c-.305-5.87-9.432-6.626-9.991.12v8.15q0 .009.01.01z"
      />
    </svg>
  );
};
export default Mailbox_01;

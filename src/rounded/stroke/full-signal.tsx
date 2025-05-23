import React from "react";
const FullSignal: React.FC<
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
        d="M18.5 19c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883v-11c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C19.199 5 18.966 5 18.5 5m0 14c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C17 18.199 17 17.966 17 17.5v-11c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C17.801 5 18.034 5 18.5 5m0 14V5M12 19c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883v-8c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C12.699 8 12.466 8 12 8m0 11c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541c-.077-.184-.077-.417-.077-.883v-8c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C11.301 8 11.534 8 12 8m0 11V8M5.5 19c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541C7 18.199 7 17.966 7 17.5v-4c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C6.199 12 5.966 12 5.5 12m0 7c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C4 18.199 4 17.966 4 17.5v-4c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C4.801 12 5.034 12 5.5 12m0 7v-7"
      />
    </svg>
  );
};
export default FullSignal;

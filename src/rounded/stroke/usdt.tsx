import React from "react";
const Usdt: React.FC<
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
        d="M13.5 9.022c4.811.145 8.5.975 8.5 1.978 0 1.105-4.477 2-10 2s-10-.895-10-2c0-1.003 3.689-1.833 8.5-1.978"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.5 10.478V8c0-.943 0-1.414.293-1.707S14.557 6 15.5 6H18c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883s0-.699-.076-.883a1 1 0 0 0-.541-.54C18.699 3 18.466 3 18 3H6c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541c-.077.184-.077.417-.077.883s0 .699.076.883a1 1 0 0 0 .541.54C5.301 6 5.534 6 6 6h2.5c.943 0 1.414 0 1.707.293S10.5 7.057 10.5 8v2.478m3 2.5V19.5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C12.699 21 12.466 21 12 21s-.699 0-.883-.076a1 1 0 0 1-.54-.541c-.077-.184-.077-.417-.077-.883v-6.522"
      />
    </svg>
  );
};
export default Usdt;

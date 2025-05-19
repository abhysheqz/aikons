import React from "react";
const BitcoinGraph: React.FC<
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
        d="M19.5 1.75a.75.75 0 0 0-1.5 0V2h-1.75a.75.75 0 0 0 0 1.5h.25V8h-.25a.75.75 0 0 0 0 1.5H18v.25a.75.75 0 0 0 1.5 0V9.5h.25a2.25 2.25 0 0 0 1.677-3.75A2.25 2.25 0 0 0 19.75 2h-.25zM18 5V3.5h1.75a.75.75 0 0 1 0 1.5zm0 1.5h1.75a.75.75 0 0 1 0 1.5H18zm-7.25 2A1.75 1.75 0 0 0 9 10.25v10c0 .966.784 1.75 1.75 1.75h2a1.75 1.75 0 0 0 1.75-1.75v-10a1.75 1.75 0 0 0-1.75-1.75zm10.75 3.961a.96.96 0 0 0-.6-.887.97.97 0 0 0-1.028.176 4 4 0 0 1-.622.472c-.237.14-.406.187-.5.187s-.263-.047-.5-.187a4 4 0 0 1-.622-.472.97.97 0 0 0-1.028-.176.96.96 0 0 0-.6.887v7.79c0 .966.784 1.75 1.75 1.75h2a1.75 1.75 0 0 0 1.75-1.75zM2 13.25c0-.966.784-1.75 1.75-1.75h2c.966 0 1.75.784 1.75 1.75v7A1.75 1.75 0 0 1 5.75 22h-2A1.75 1.75 0 0 1 2 20.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinGraph;

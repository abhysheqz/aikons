import React from "react";
const MoneyExchange_01: React.FC<
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
        d="M20 2.75a2.75 2.75 0 0 1 2.75 2.75v6.367l-.998-1.29c-.518-.585-1.82-.768-2.673-.247a2.3 2.3 0 0 0-1.063 1.672H16.75a3.25 3.25 0 0 0-3.25 3.25c0 .576.219 1.1.575 1.498-.097.109-.338.495-.338.495-.159.318-.236.662-.236 1.005H4a2.75 2.75 0 0 1-2.75-2.75v-10A2.75 2.75 0 0 1 4 2.75zM2.75 15.5c0 .69.56 1.25 1.25 1.25h1.93a4 4 0 0 0-3.18-3.18zm9.25-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4.25c-.69 0-1.25.56-1.25 1.25v1.93a4 4 0 0 0 3.18-3.18zm14.07 0a4 4 0 0 0 3.18 3.18V5.5c0-.69-.56-1.25-1.25-1.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M20.75 17.25a1 1 0 1 1 2 0 2 2 0 0 1-2 2h-3.001l.3.4.058.085a1 1 0 0 1-1.591 1.193l-.066-.079-1.5-2a1 1 0 0 1 .8-1.6zm-6-2a2 2 0 0 1 2-2h3.001l-.3-.4-.058-.086a1 1 0 0 1 1.591-1.193l.066.079 1.5 2 .076.118a1 1 0 0 1-.876 1.482h-5a1 1 0 1 1-2 0"
      />
    </svg>
  );
};
export default MoneyExchange_01;

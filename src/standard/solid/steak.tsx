import React from "react";
const Steak: React.FC<
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
        d="M1 11v-.5h2v.5c0 1.443.002 2.424.1 3.159.096.706.263 1.033.486 1.255.222.223.55.39 1.255.485.733.099 1.711.101 3.147.101 1.526-.034 4.403.554 6.822 2.348A4 4 0 0 0 21 15v-4h2v4a6 6 0 0 1-9.362 4.969c-2.04-1.522-4.493-1.997-5.613-1.97L8 18h-.07c-1.355 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.657-.656-.929-1.475-1.053-2.403-.12-.884-.119-2-.119-3.354z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3c-2.2 0-4.873.776-7.005 2.024C2.92 6.238 1 8.122 1 10.5A3.5 3.5 0 0 0 4.5 14h3.525c1.12-.028 3.572.447 5.613 1.969l.044.03a6 6 0 0 0 8.117-8.601C19.441 4.26 16.232 3 12 3m5 5.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Steak;

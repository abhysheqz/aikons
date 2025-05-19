import React from "react";
const BitcoinSmartphone_01: React.FC<
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
        d="M3 3.75A2.75 2.75 0 0 1 5.75 1h9a2.75 2.75 0 0 1 2.75 2.75v1.878a2.248 2.248 0 0 0-2.621.872h-.629A2.25 2.25 0 0 0 13 10.621v2.258A2.25 2.25 0 0 0 14.25 17h.629a2.25 2.25 0 0 0 2.621.872v1.878a2.75 2.75 0 0 1-2.75 2.75h-9A2.75 2.75 0 0 1 3 19.75zm7.25 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-1.75-13A.75.75 0 0 1 9.25 4h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.5 7.75a.75.75 0 0 0-1.5 0V8h-1.75a.75.75 0 0 0 0 1.5h.25V14h-.25a.75.75 0 0 0 0 1.5H16v.25a.75.75 0 0 0 1.5 0v-.25h.25a2.25 2.25 0 0 0 1.677-3.75A2.25 2.25 0 0 0 17.75 8h-.25zM16 11V9.5h1.75a.75.75 0 0 1 0 1.5zm0 1.5h1.75a.75.75 0 0 1 0 1.5H16z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinSmartphone_01;

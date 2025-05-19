import React from "react";
const Encrypt: React.FC<
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
        d="M3.75 3.5a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0zM1.25 16a5.25 5.25 0 0 1 9.723-2.75H20a.75.75 0 0 1 .53.22l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-.53.22h-1a.75.75 0 0 1-.54-.229l-.71-.735-.71.735a.75.75 0 0 1-.54.229h-5.527A5.25 5.25 0 0 1 1.25 16M5 16a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1M7.5 4.25a.75.75 0 0 0-.75.75v2a.75.75 0 0 0 1.5 0V5a.75.75 0 0 0-.75-.75M5.25 5a2.25 2.25 0 0 1 4.5 0v2a2.25 2.25 0 0 1-4.5 0zm7.5-1.5a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0zM15 2.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75M18.75 5a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-1.5 0zm.75-2.25A2.25 2.25 0 0 0 17.25 5v2a2.25 2.25 0 0 0 4.5 0V5a2.25 2.25 0 0 0-2.25-2.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Encrypt;

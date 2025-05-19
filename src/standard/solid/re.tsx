import React from "react";
const Re: React.FC<
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
        d="M5.5 1.75A3.75 3.75 0 0 0 1.75 5.5v13a3.75 3.75 0 0 0 3.75 3.75h13a3.75 3.75 0 0 0 3.75-3.75v-13a3.75 3.75 0 0 0-3.75-3.75zM18 13a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zm0 3.5a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2zM7.25 13a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H8.75V18a.75.75 0 0 1-1.5 0zm6.5-.75a2.5 2.5 0 0 0-2.5 2.5v1.583a2.417 2.417 0 0 0 2.417 2.417h.126c.652 0 1.277-.259 1.737-.72a.75.75 0 1 0-1.06-1.06.96.96 0 0 1-.677.28h-.126a.917.917 0 0 1-.917-.917v-.083h2.75a.75.75 0 0 0 .75-.75v-.75a2.5 2.5 0 0 0-2.5-2.5m0 1.5a1 1 0 0 1 1 1h-2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Re;

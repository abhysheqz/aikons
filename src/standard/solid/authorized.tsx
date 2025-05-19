import React from "react";
const Authorized: React.FC<
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
        d="M4 2h13a3 3 0 0 1 3 3v7.5a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v7.5a1 1 0 1 1-2 0V5a3 3 0 0 1 3-3"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 12.25a4.75 4.75 0 1 0 4.417 6.5h3.333V21c0 .414.336.75.75.75h1.78a1.75 1.75 0 0 0 1.66-1.197l.6-1.803H22a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75H11.873c-.86-1.21-2.274-2-3.873-2m0 3.25a1.5 1.5 0 0 0 0 3h.009a1.5 1.5 0 0 0 0-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Authorized;

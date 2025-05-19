import React from "react";
const Beater: React.FC<
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
      <path fill="currentColor" d="M19 15.5h-5v5h5z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.5 12.5v3h-2v-3zm0 8v2h-2v-2zM8 1.5h10a1 1 0 0 1 1 1v3h-2v-2H8z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 4.75a.75.75 0 0 0-.75.75v7c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75v-7a.75.75 0 0 0-.75-.75zM14.009 8H12v2h2.009zM18 8h-2.009v2H18z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Beater;

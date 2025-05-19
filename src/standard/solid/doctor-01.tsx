import React from "react";
const Doctor_01: React.FC<
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
        d="M7.75 5.5a4.25 4.25 0 0 1 8.5 0v1a4.25 4.25 0 0 1-8.5 0z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.25 12.25H10a.75.75 0 0 1 .53.22L12 13.94l1.47-1.47a.75.75 0 0 1 .53-.22h1.25v5.7a1.5 1.5 0 1 0 1.5 0v-5.7H18A2.75 2.75 0 0 1 20.75 15v7a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75v-7A2.75 2.75 0 0 1 6 12.25h1.75v4.104a2.75 2.75 0 0 0-2 2.646v1a.75.75 0 0 0 1.5 0v-1a1.25 1.25 0 1 1 2.5 0v1a.75.75 0 0 0 1.5 0v-1c0-1.259-.846-2.32-2-2.646z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Doctor_01;

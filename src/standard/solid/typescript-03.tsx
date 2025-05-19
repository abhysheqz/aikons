import React from "react";
const Typescript_03: React.FC<
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
        d="M3.274 19.823a2.924 2.924 0 0 0 2.917 2.927h11.642c1.193 0 2.218-.72 2.67-1.75H12.5a2 2 0 0 1-2-2v-3a2 2 0 1 1 0-4h10.25V9.055a.98.98 0 0 0-.285-.692l-6.809-6.827a.97.97 0 0 0-.687-.286H6.168A2.924 2.924 0 0 0 3.25 4.186zm9.293-16.617 6.237 6.255h-4.737a1.5 1.5 0 0 1-1.5-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.75 14a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-1.25V19a.75.75 0 0 1-1.5 0v-4.25H10.5a.75.75 0 0 1-.75-.75m6.5 0a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-2.25v1H20a.75.75 0 0 1 .75.75V19a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1 0-1.5h2.25v-1H17a.75.75 0 0 1-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Typescript_03;

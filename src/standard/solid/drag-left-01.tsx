import React from "react";
const DragLeft_01: React.FC<
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
        d="M13 2.75a2.75 2.75 0 0 0-1.417 5.108.75.75 0 1 1-.774 1.284 4.25 4.25 0 1 1 4.382 0 .75.75 0 0 1-.774-1.284A2.75 2.75 0 0 0 13 2.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.743 6.501a2.251 2.251 0 1 1 4.502 0v4.27c2.983.178 4.728 1.396 5.636 2.34.69.72.869 1.673.869 2.484a5.4 5.4 0 0 1-.906 2.99l-1.095 1.642V22a.75.75 0 0 1-.75.75h-7.506a.75.75 0 0 1-.75-.75v-1.71l-3.875-4.26a2.377 2.377 0 0 1 3.438-3.277l.437.437zM6.03 2.47a.75.75 0 0 1 0 1.06L4.81 4.75H9.5a.75.75 0 0 1 0 1.5H4.81l1.22 1.22a.75.75 0 0 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DragLeft_01;

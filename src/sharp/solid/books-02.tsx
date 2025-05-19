import React from "react";
const Books_02: React.FC<
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
        d="M13.5 2.25c2.21 0 4 1.679 4 3.75s-1.79 3.75-4 3.75h-11v-7.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.5 10.125h-15V8.25h15c2.21 0 4 1.679 4 3.75s-1.79 3.75-4 3.75h-5v-1.875h5c1.105 0 2-.84 2-1.875s-.895-1.875-2-1.875m-15 3.75h4v1.875h-4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.5 16.125h-2V14.25h2c2.21 0 4 1.679 4 3.75s-1.79 3.75-4 3.75h-12v-1.875h12c1.105 0 2-.84 2-1.875s-.895-1.875-2-1.875m-8 0h-4V14.25h4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.75 17V9h7.5v8a.75.75 0 0 1-1.23.576l-2.52-2.1-2.52 2.1A.75.75 0 0 1 5.75 17"
      />
    </svg>
  );
};
export default Books_02;

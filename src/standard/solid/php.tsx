import React from "react";
const Php: React.FC<
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
        d="M5.5 1.75A3.75 3.75 0 0 0 1.75 5.5v13a3.75 3.75 0 0 0 3.75 3.75h13a3.75 3.75 0 0 0 3.75-3.75v-13a3.75 3.75 0 0 0-3.75-3.75zm0 7.5a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0v-1.75h.5a2 2 0 1 0 0-4zm1.25 2.5h-.5v-1h.5a.5.5 0 0 1 0 1m4.5-1.75a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0v-1.75h1.5V15a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0v1.75h-1.5zM16 9.25a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0v-1.75h.5a2 2 0 1 0 0-4zm1.25 2.5h-.5v-1h.5a.5.5 0 0 1 0 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Php;

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
        d="M6.5 10.75a5.25 5.25 0 1 0 4.473 8h5.534l.932-.964.932.964H20L22.75 16 20 13.25h-9.027a5.25 5.25 0 0 0-4.473-2.5m1.25 4.5h-2.5v1.5h2.5zM3.75 2.75v6.5h-1.5v-6.5zM7.5 4.25a.75.75 0 0 0-.75.75v2a.75.75 0 0 0 1.5 0V5a.75.75 0 0 0-.75-.75M5.25 5a2.25 2.25 0 0 1 4.5 0v2a2.25 2.25 0 0 1-4.5 0zM12.75 2.75v6.5h-1.5v-6.5zM15.75 2.75v6.5h-1.5v-6.5zM19.5 4.25a.75.75 0 0 0-.75.75v2a.75.75 0 0 0 1.5 0V5a.75.75 0 0 0-.75-.75M17.25 5a2.25 2.25 0 0 1 4.5 0v2a2.25 2.25 0 0 1-4.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Encrypt;

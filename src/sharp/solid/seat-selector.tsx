import React from "react";
const SeatSelector: React.FC<
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
        d="M3.25 11a1.75 1.75 0 1 1 3.5 0v7.75H6A2.75 2.75 0 0 1 3.25 16zM17.25 11a1.75 1.75 0 1 1 3.5 0v5A2.75 2.75 0 0 1 18 18.75h-.75zM8 18.75h8v-4.5H8zM8.75 20v1.25h-2.5v1.5h11.5v-1.5h-2.5V20z"
      />
      <path
        fill="currentColor"
        d="M5.25 4A2.75 2.75 0 0 1 8 1.25h8A2.75 2.75 0 0 1 18.75 4v4.01A3 3 0 0 0 16 11v2H8v-2a3 3 0 0 0-2.75-2.99z"
      />
    </svg>
  );
};
export default SeatSelector;

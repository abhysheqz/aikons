import React from "react";
const Salah: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18 18-1.5-2.5-3-2.5-.5-5 .695-.732C15.394 8.025 17 5.881 17 4.5a2.5 2.5 0 0 0-5 0c0 1-.8 1.6-2 2C8.5 7 6.5 8 6.5 13c0 4 1.833 5.333 2.5 6-3.2 0-4 2-4 3h13a2 2 0 1 0 0-4Zm0 0c-7.728 0-8.44-4.667-8-7"
      />
    </svg>
  );
};
export default Salah;

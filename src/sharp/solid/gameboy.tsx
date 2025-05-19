import React from "react";
const Gameboy: React.FC<
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
        d="M3 1.25a.75.75 0 0 0-.75.75v20c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V2a.75.75 0 0 0-.75-.75zM8.25 19v-1.75H6.5v-1.5h1.75V14h1.5v1.75h1.75v1.5H9.75V19zm8.5-4v3h-1.5v-3zM6 5h12v6H6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Gameboy;

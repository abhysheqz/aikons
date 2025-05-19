import React from "react";
const Mining_01: React.FC<
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
        d="M8 20.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M10.75 19a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0M16 20.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M18.75 19a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.215 19.752V19c0-.69-1.556-2.25-2.242-2.25s-2.241 1.56-2.241 2.25v.75h-3.464V19c0-.69-1.556-2.25-2.242-2.25S5.785 18.31 5.785 19v.75H2.379L1.25 7.25h21.5l-1.129 12.49zM4.416 5.75h9.168a4.752 4.752 0 0 0-9.168 0M15.125 5.75h4.459a4.75 4.75 0 0 0-6.21-3.214 6.24 6.24 0 0 1 1.75 3.214"
      />
    </svg>
  );
};
export default Mining_01;

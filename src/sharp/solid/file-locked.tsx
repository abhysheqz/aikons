import React from "react";
const FileLocked: React.FC<
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
        d="M19 16.25v-.5a2.5 2.5 0 0 0-5 0v.5h-1.75v6.5h8.5v-6.5zm-3.5-.5a1 1 0 1 1 2 0v.5h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.251 1.25-.001 21.5H11V15h1.825a3.751 3.751 0 0 1 7.35 0h.575V8.63l-7.39-7.38zm9.312 1.955 6.236 6.255h-6.236z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileLocked;

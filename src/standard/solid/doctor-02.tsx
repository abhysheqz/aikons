import React from "react";
const Doctor_02: React.FC<
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
        d="M3.25 18A2.75 2.75 0 0 1 6 15.25h3a.75.75 0 0 1 .6.3l2.4 3.2 2.4-3.2a.75.75 0 0 1 .6-.3h3A2.75 2.75 0 0 1 20.75 18v4a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m7.313 8.09-.997-4.047C5.971 2.64 7.014 1.25 8.477 1.25h7.046c1.462 0 2.506 1.389 2.16 2.793l-.996 4.048V10c0 2.612-2.087 4.75-4.687 4.75S7.313 12.612 7.313 10zm1.5.66V10c0 1.806 1.438 3.25 3.187 3.25 1.75 0 3.187-1.444 3.187-3.25V8.75zm3.937-5a.75.75 0 0 0-1.5 0v.5h-.5a.75.75 0 0 0 0 1.5h.5v.5a.75.75 0 1 0 1.5 0v-.5h.5a.75.75 0 0 0 0-1.5h-.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Doctor_02;

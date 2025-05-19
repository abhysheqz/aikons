import React from "react";
const Searching: React.FC<
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
        d="M5 13a7 7 0 1 1 12.606 4.192L21 20.586 19.586 22l-3.394-3.394A7 7 0 0 1 5 13m7-5a5 5 0 1 0 0 10 5 5 0 0 0 0-10"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 2h20v8h-2V4H4v6H2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Searching;

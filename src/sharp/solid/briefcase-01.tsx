import React from "react";
const Briefcase_01: React.FC<
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
      <path fill="currentColor" d="M14 13h-4v2a2 2 0 1 0 4 0z" />
      <path
        fill="currentColor"
        d="M8.5 11.5h7v3.25h2.777l3.973-3.405V6a.75.75 0 0 0-.75-.75h-19a.75.75 0 0 0-.75.75v5.345l3.973 3.405H8.5z"
      />
      <path
        fill="currentColor"
        d="M21.25 21.5a.75.75 0 0 1-.75.75h-17a.75.75 0 0 1-.75-.75v-7.322l2.418 2.072H8.73a3.501 3.501 0 0 0 6.54 0h3.562l2.418-2.072z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.5 2.75a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v3.5h-2v-2.5h-5v2.5h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Briefcase_01;

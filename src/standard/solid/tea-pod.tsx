import React from "react";
const TeaPod: React.FC<
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
        d="M14.5 3A3.5 3.5 0 0 0 11 6.5V10a1 1 0 1 1-2 0V6.5a5.5 5.5 0 1 1 11 0V10a1 1 0 1 1-2 0V6.5A3.5 3.5 0 0 0 14.5 3"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.5 6.5a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.9 8.55a.75.75 0 0 1 .964-.206l4.055 2.253.023-.016a8 8 0 0 1 1.301-.76c1.158-.545 2.892-1.071 5.257-1.071 3.525 0 6.172 1.71 7.336 2.621.628.492.914 1.236.914 1.957V20A2.75 2.75 0 0 1 20 22.75H9A2.75 2.75 0 0 1 6.25 20v-2.729l-4.826-5.79a.75.75 0 0 1-.024-.931z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TeaPod;

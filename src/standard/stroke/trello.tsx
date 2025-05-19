import React from "react";
const Trello: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 2.5a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 6H7a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1ZM17 6h-2.5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1l2.5.003a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Z"
      />
    </svg>
  );
};
export default Trello;

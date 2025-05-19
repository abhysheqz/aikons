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
        fill="currentColor"
        fillRule="evenodd"
        d="M1.75 4.5A2.75 2.75 0 0 1 4.5 1.75h15a2.75 2.75 0 0 1 2.75 2.75v15a2.75 2.75 0 0 1-2.75 2.75h-15a2.75 2.75 0 0 1-2.75-2.75zM9.5 6H7a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1m5 0H17a1 1 0 0 1 1 1v4.003a1 1 0 0 1-1 1L14.5 12a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Trello;

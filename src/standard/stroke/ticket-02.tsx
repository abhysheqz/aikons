import React from "react";
const Ticket_02: React.FC<
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
        d="M18 15 9 6M7.833 18.944l1.642 1.642a2 2 0 0 0 2.828 0l8.283-8.283a2 2 0 0 0 0-2.828l-1.642-1.642a1.964 1.964 0 1 1-2.777-2.777l-1.642-1.642a2 2 0 0 0-2.828 0l-8.283 8.283a2 2 0 0 0 0 2.828l1.642 1.642a1.964 1.964 0 1 1 2.777 2.777Z"
      />
    </svg>
  );
};
export default Ticket_02;

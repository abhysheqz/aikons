import React from "react";
const ShoppingCartCheckOut_02: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 2h2.5L7 16l-1 2M6 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4M16 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4M8 20h6"
      />
      <path
        fill="currentColor"
        d="M6.893 15.258a.75.75 0 1 0 .214 1.484zM18.5 14.35l.107.742a.75.75 0 0 0 .634-.623zm2.5-8.6a.75.75 0 0 0 0-1.5zm-14 0a.75.75 0 0 0 0-1.5zm11-1.5a.75.75 0 0 0 0 1.5zM7.107 16.742l11.5-1.65-.213-1.484-11.5 1.65zM19.24 14.47l1.5-9.35-1.482-.238-1.5 9.35zM20 5.75h1v-1.5h-1zm-15 0h2v-1.5H5zm13 0h2v-1.5h-2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 5.5 12.5 3 15 5.5M12.5 11V3.609"
      />
    </svg>
  );
};
export default ShoppingCartCheckOut_02;

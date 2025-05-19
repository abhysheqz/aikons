import React from "react";
const Drag_01: React.FC<
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
        d="M20.964 4h-3.992m3.992 0c0 .56-1.491 1.607-1.996 2m1.996-2c0-.56-1.491-1.607-1.996-2M3 4H6.99M3 4c0-.56 1.492-1.607 1.996-2M3 4c0 .56 1.492 1.607 1.996 2M9.815 22v-.94a3 3 0 0 0-.598-1.798l-3.823-5.109c-.317-.424-.554-.939-.408-1.449.36-1.259 1.782-2.378 3.373-.407l1.6 1.708V3.594c.098-1.83 3.174-2.407 3.491 0v5.933c1.483-.19 8.466.851 7.45 5.265l-.144.636c-.207.918-.815 2.552-1.486 3.508-.7.995-.373 2.6-.453 3.066"
      />
    </svg>
  );
};
export default Drag_01;

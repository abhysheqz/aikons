import React from "react";
const Helicopter: React.FC<
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
        d="M14 4v4M16 8H6.118a1 1 0 0 1-.894-.553L4.5 6H2l.86 3.44a1 1 0 0 0 .695.719l5.686 1.624a2 2 0 0 1 1.165.894l2.011 3.352a2 2 0 0 0 1.715.971H21a1 1 0 0 0 1-1v-2a6 6 0 0 0-6-6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.5 13.5h-2C16 13.5 14 11 14 8M12 20h2m7 0h-2m0 0 1-3m-1 3h-5m0 0 1-3M11 4h6"
      />
    </svg>
  );
};
export default Helicopter;

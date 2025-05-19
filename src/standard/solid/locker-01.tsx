import React from "react";
const Locker_01: React.FC<
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
        d="M11.25 18.75V2.25H4A2.75 2.75 0 0 0 1.25 5v11A2.75 2.75 0 0 0 3 18.563V21a1 1 0 1 0 2 0v-2.25zm7.75 0h-6.25V2.25H20A2.75 2.75 0 0 1 22.75 5v11A2.75 2.75 0 0 1 21 18.563V21a1 1 0 1 1-2 0zM5.5 6.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zM14.75 7a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M8.5 13.25a.75.75 0 0 0 0 1.5h.009a.75.75 0 0 0 0-1.5zm6.25.75a.75.75 0 0 1 .75-.75h.009a.75.75 0 0 1 0 1.5H15.5a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Locker_01;

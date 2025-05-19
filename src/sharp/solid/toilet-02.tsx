import React from "react";
const Toilet_02: React.FC<
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
        d="M17.75 13.25V14c0 2.177-.88 4.15-2.292 5.397l1.203 2.25A.75.75 0 0 1 16 22.75H8a.75.75 0 0 1-.661-1.104l1.203-2.249C7.13 18.15 6.25 16.177 6.25 14v-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.25 2A.75.75 0 0 1 4 1.25h16a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75h-2v-1.5h1.25v-7.5H4.75v7.5H6v1.5H4a.75.75 0 0 1-.75-.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.25 10c0-3.01 1.98-5.75 4.75-5.75s4.75 2.74 4.75 5.75c0 .699-.103 1.373-.294 2H7.544a6.9 6.9 0 0 1-.294-2"
      />
    </svg>
  );
};
export default Toilet_02;

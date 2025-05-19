import React from "react";
const SquareArrowReload_01: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm9.55 5.15a.75.75 0 0 1 1.05.15l1.5 2a.75.75 0 0 1-.6 1.2H9a.25.25 0 0 0-.25.25v1a.75.75 0 1 1-1.5 0v-1c0-.966.784-1.75 1.75-1.75h5.5l-.6-.8a.75.75 0 0 1 .15-1.05M16 11.75a.75.75 0 0 1 .75.75v1A1.75 1.75 0 0 1 15 15.25H9.5l.6.8a.75.75 0 1 1-1.2.9l-1.5-2a.75.75 0 0 1 .6-1.2h7a.25.25 0 0 0 .25-.25v-1a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowReload_01;

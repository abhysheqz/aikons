import React from "react";
const Pacman_01: React.FC<
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
        d="M16.5 12a1 1 0 0 1 1-1h.009a1 1 0 0 1 0 2H17.5a1 1 0 0 1-1-1m3.991 0a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2h-.009a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.25 2.25C5.865 2.25 1.5 6.615 1.5 12s4.365 9.75 9.75 9.75a9.74 9.74 0 0 0 8.125-4.358l.388-.584L13.483 12l6.28-4.808-.389-.584A9.74 9.74 0 0 0 11.25 2.25M11.005 9c.55 0 .995-.448.995-1s-.446-1-.995-1h-.01A1 1 0 0 0 10 8c0 .552.446 1 .995 1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pacman_01;

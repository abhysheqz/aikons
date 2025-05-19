import React from "react";
const Download_01: React.FC<
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
        d="M3.23 9.01a1 1 0 0 1 .856 1.126A9 9 0 0 0 4 11.4c0 4.812 3.642 8.6 8 8.6s8-3.788 8-8.6q-.001-.646-.086-1.264a1 1 0 0 1 1.982-.272Q22 10.618 22 11.4C22 17.193 17.583 22 12 22S2 17.193 2 11.4q.001-.781.104-1.536a1 1 0 0 1 1.127-.855"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2a1 1 0 0 1 1 1v6.5h1.5a1 1 0 0 1 .707 1.707l-2.5 2.5a1 1 0 0 1-1.414 0l-2.5-2.5A1 1 0 0 1 9.5 9.5H11V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Download_01;

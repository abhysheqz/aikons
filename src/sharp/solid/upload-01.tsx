import React from "react";
const Upload_01: React.FC<
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
        d="M20 11.4q-.001-.646-.086-1.264l1.982-.272Q22 10.618 22 11.4C22 17.192 17.583 22 12 22S2 17.192 2 11.4q.001-.782.104-1.536l1.982.272A9 9 0 0 0 4 11.4c0 4.811 3.642 8.6 8 8.6s8-3.789 8-8.6"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m12 2 3.707 3.707-1.414 1.415L13 5.829v7.585h-2V5.83L9.707 7.122 8.293 5.707z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Upload_01;

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
        d="M20 10.9q-.001-.646-.086-1.264l1.981-.272Q22 10.118 22 10.9c0 5.792-4.418 10.6-10 10.6-5.583 0-10-4.808-10-10.6q0-.782.104-1.536l1.982.272A9 9 0 0 0 4 10.9c0 4.811 3.641 8.6 8 8.6 4.358 0 8-3.789 8-8.6"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 2.5v7.586l1.293-1.293 1.414 1.414L12 13.914l-3.707-3.707 1.414-1.414L11 10.086V2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Download_01;

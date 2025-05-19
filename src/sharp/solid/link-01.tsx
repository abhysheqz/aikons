import React from "react";
const Link_01: React.FC<
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
        d="M16.809 4.191a4.067 4.067 0 0 0-5.752 0L8.191 7.057a4.067 4.067 0 1 0 5.752 5.752l.207-.207 1.414 1.414-.207.207a6.067 6.067 0 0 1-8.44.136 4.067 4.067 0 0 0 6.026 5.45l2.866-2.866a4.067 4.067 0 1 0-5.752-5.752l-.207.207-1.414-1.414.207-.207a6.067 6.067 0 0 1 8.44-.136 4.067 4.067 0 0 0-.274-5.45m1.506 7.072a6.067 6.067 0 0 0-8.672-8.486L6.777 5.643a6.07 6.07 0 0 0-1.092 7.094 6.067 6.067 0 0 0 8.672 8.486l2.866-2.866a6.07 6.07 0 0 0 1.092-7.094"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Link_01;

import React from "react";
const Comment_01: React.FC<
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
        d="M3.75 2A2.75 2.75 0 0 0 1 4.75v11.997a2.75 2.75 0 0 0 2.75 2.75h1.249v1.286c0 1.43 1.623 2.257 2.78 1.416l3.714-2.702h8.255a2.75 2.75 0 0 0 2.75-2.75V4.75A2.75 2.75 0 0 0 19.748 2zm7.5 6.997a.75.75 0 0 0-.002-1.5L7.753 7.5A.75.75 0 1 0 7.755 9zm-3.501 3.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Comment_01;

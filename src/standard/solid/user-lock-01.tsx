import React from "react";
const UserLock_01: React.FC<
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
        d="M20.492 15.14v-.89a2.502 2.502 0 1 0-5.004 0v.89h-.486c-.69 0-1.25.56-1.25 1.25v4.108c0 .69.56 1.25 1.25 1.25h5.996c.69 0 1.25-.56 1.25-1.25V16.39c0-.69-.56-1.25-1.25-1.25zm-3.504-.89a1.002 1.002 0 0 1 2.004 0v.89h-2.005z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m14.256 13.879-.01.128a2.5 2.5 0 0 0-1.744 2.384v4.107q0 .127.013.252H2.502a.75.75 0 0 1-.75-.75 7.75 7.75 0 0 1 5.995-7.55 5.252 5.252 0 0 1 1.755-10.2 5.25 5.25 0 0 1 1.755 10.2 7.7 7.7 0 0 1 2.999 1.429"
      />
    </svg>
  );
};
export default UserLock_01;

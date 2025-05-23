import React from "react";
const Apron: React.FC<
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
        d="M12 3a3.01 3.01 0 0 0-3.015 3q0 .21.005.458c.012.862.03 2.044-.24 3.031-.17.62-.474 1.267-1.041 1.758-.583.504-1.338.753-2.233.753C2.114 12 .758 7.655 3.37 5.7a1 1 0 1 1 1.198 1.6c-1.106.828-.491 2.7.907 2.7.511 0 .772-.134.924-.265.167-.145.314-.385.42-.773.188-.686.179-1.51.17-2.376L6.984 6c0-2.765 2.249-5 5.015-5s5.015 2.235 5.015 5q0 .295-.004.586c-.01.865-.02 1.69.169 2.376.106.388.253.628.42.773.152.13.413.265.924.265 1.398 0 2.013-1.871.907-2.7a1 1 0 0 1 1.198-1.6c2.613 1.955 1.257 6.3-2.105 6.3-.895 0-1.65-.249-2.233-.753-.567-.49-.871-1.138-1.04-1.758-.27-.987-.253-2.169-.24-3.03q.004-.25.004-.459c0-1.653-1.346-3-3.015-3"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.97 7.25a.75.75 0 0 0-.748.703c-.046.738-.176 1.323-.433 1.71-.215.326-.567.587-1.313.587H5a.75.75 0 0 0-.75.75v9A2.75 2.75 0 0 0 7 22.75h10A2.75 2.75 0 0 0 19.75 20v-9a.75.75 0 0 0-.75-.75h-.476c-.746 0-1.098-.26-1.313-.586-.257-.388-.387-.973-.433-1.711a.75.75 0 0 0-.749-.703zm1.528 5.15a.6.6 0 0 0-.6.6v5a.6.6 0 0 0 .6.6h5a.6.6 0 0 0 .6-.6v-5a.6.6 0 0 0-.6-.6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Apron;

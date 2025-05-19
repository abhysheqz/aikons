import React from "react";
const Handcuffs: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.984 15.984a1.996 1.996 0 0 0 1.995-1.998 1.996 1.996 0 0 0-1.995-1.998 1.996 1.996 0 0 0-1.995 1.998c0 1.103.894 1.997 1.995 1.997ZM15.963 17.98a1.996 1.996 0 0 0 1.995-1.997 1.996 1.996 0 0 0-1.995-1.998M15.963 9.99V3.998L7.986 2l.002 5.993"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7.986 19.998a6.007 6.007 0 0 0 6.003-6.012c0-2.272-1.14-4.143-2.998-5.166V6.07a.1.1 0 0 0-.1-.1H5.084a.1.1 0 0 0-.1.1V8.82c-1.857 1.023-3.002 2.894-3.002 5.166a6.007 6.007 0 0 0 6.004 6.011Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.97 7.97h4.917a.1.1 0 0 1 .1.1v2.752c1.857 1.022 2.998 2.893 2.998 5.166a6.01 6.01 0 0 1-6.003 6.011 5.97 5.97 0 0 1-2.992-.798"
      />
    </svg>
  );
};
export default Handcuffs;

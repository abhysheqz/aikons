import React from "react";
const PeerToPeer_03: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M10 6h.5M13.5 6h.5M20.5 14.5v5H18m-14.5-5v5H6"
      />
      <path
        fill="currentColor"
        d="M4 4.5h.75zM5.5 3v-.75zM7 4.5h.75zM5.5 6v-.75zM2 11.5h-.75v.75H2zm7 0v.75h.75v-.75zm-4.25-7a.75.75 0 0 1 .75-.75v-1.5A2.25 2.25 0 0 0 3.25 4.5zm.75-.75a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 5.5 2.25zm.75.75a.75.75 0 0 1-.75.75v1.5A2.25 2.25 0 0 0 7.75 4.5zm-.75.75a.75.75 0 0 1-.75-.75h-1.5A2.25 2.25 0 0 0 5.5 6.75zm-3.5 7h7v-1.5H2zm3.5-4.5c-2.235 0-4.25 1.575-4.25 3.75h1.5c0-1.138 1.119-2.25 2.75-2.25zm4.25 3.75c0-2.175-2.015-3.75-4.25-3.75v1.5c1.631 0 2.75 1.112 2.75 2.25zM17 4.5h.75zM18.5 3v-.75zM20 4.5h.75zM18.5 6v-.75zM15 11.5h-.75v.75H15zm7 0v.75h.75v-.75zm-4.25-7a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25zm.75.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25zm-3.5 7h7v-1.5h-7zm3.5-4.5c-2.235 0-4.25 1.575-4.25 3.75h1.5c0-1.138 1.119-2.25 2.75-2.25zm4.25 3.75c0-2.175-2.015-3.75-4.25-3.75v1.5c1.631 0 2.75 1.112 2.75 2.25z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.5 17.002V15.5a1.5 1.5 0 0 1 3 0v1.502M9 17h6v4H9z"
      />
    </svg>
  );
};
export default PeerToPeer_03;

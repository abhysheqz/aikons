import React from "react";
const Clip: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m4.92 22-1.851-8.474C2.736 12.254 3.655 11 4.919 11h14.162c1.264 0 2.183 1.254 1.85 2.526L19.081 22"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.5 22H7v-.25c0-.966.784-1.75 1.75-1.75v0c.966 0 1.75.784 1.75 1.75V22h3v-.25c0-.966.784-1.75 1.75-1.75v0c.966 0 1.75.784 1.75 1.75V22h3.5M8.5 20 10 7l-1.594-.738A2.21 2.21 0 0 1 7 4.21C7 2.99 8.001 2 9.236 2h5.528C15.999 2 17 2.99 17 4.21a2.21 2.21 0 0 1-1.406 2.052L14 7l1.5 13"
      />
    </svg>
  );
};
export default Clip;

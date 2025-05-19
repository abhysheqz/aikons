import React from "react";
const Pen_01: React.FC<
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
        d="M3.5 18.985V20.5h1.514c1.227 0 1.84 0 2.391-.228.551-.229.985-.662 1.852-1.53l9.864-9.863c.883-.883 1.324-1.324 1.373-1.866q.012-.135 0-.269c-.05-.541-.49-.983-1.373-1.865-.883-.883-1.324-1.324-1.865-1.373a1.5 1.5 0 0 0-.27 0c-.541.049-.982.49-1.865 1.373l-9.864 9.864c-.867.867-1.3 1.3-1.529 1.852-.228.55-.228 1.164-.228 2.39M13.5 6.5l4 4"
      />
    </svg>
  );
};
export default Pen_01;

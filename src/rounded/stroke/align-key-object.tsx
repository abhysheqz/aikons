import React from "react";
const AlignKeyObject: React.FC<
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
        d="M20 5.99v5.987m-2-7.983H6m4 15.966H6m-2-1.995V5.99"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M22 3.994a2 2 0 0 1-2 1.996c-1.105 0-2-.894-2-1.996s.895-1.996 2-1.996 2 .894 2 1.996ZM6 3.994A2 2 0 0 1 4 5.99c-1.105 0-2-.894-2-1.996s.895-1.996 2-1.996 2 .894 2 1.996ZM6 19.96a2 2 0 0 1-2 1.996c-1.105 0-2-.893-2-1.996s.895-1.995 2-1.995 2 .893 2 1.995Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15.538 19.412 18 16.796m0 0 1.486-1.588c.182-.145.576-.39 1.107.097.481.44 1.112 1.125 1.395 1.445M18 16.796l1.504 1.637m-3.506 2.053a1.51 1.51 0 0 1-1.505 1.515 1.51 1.51 0 0 1-1.505-1.515 1.51 1.51 0 0 1 1.505-1.515 1.51 1.51 0 0 1 1.505 1.515Z"
      />
    </svg>
  );
};
export default AlignKeyObject;

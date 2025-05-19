import React from "react";
const City_03: React.FC<
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
        d="M1.84 12.136c.377-.504.957-.886 1.66-.886s1.283.382 1.66.886c.378.504.59 1.165.59 1.864s-.212 1.36-.59 1.864c-.377.504-.957.886-1.66.886s-1.283-.382-1.66-.886C1.461 15.36 1.25 14.7 1.25 14s.212-1.36.59-1.864"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.746 22v-6h1.5v6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 22a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.45 11.4a.75.75 0 0 0-.9 0l-4 3.01a.75.75 0 0 0-.3.599V22c0 .414.336.75.75.75h8a.75.75 0 0 0 .75-.75v-6.991a.75.75 0 0 0-.3-.6zM18 19a1 1 0 1 0-2 0v2.5a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 1.25h5A2.75 2.75 0 0 1 17.75 4v6.092a2.05 2.05 0 0 0-1.982.27l-4 3.008a2.05 2.05 0 0 0-.818 1.639V22c0 .265.05.518.142.75H8a.75.75 0 0 1-.75-.75V4A2.75 2.75 0 0 1 10 1.25m1.5 3a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default City_03;

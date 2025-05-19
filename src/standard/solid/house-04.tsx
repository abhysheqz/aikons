import React from "react";
const House_04: React.FC<
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
        d="M1.84 10.136c.377-.504.957-.886 1.66-.886s1.283.382 1.66.886c.378.504.59 1.165.59 1.864s-.212 1.36-.59 1.864c-.377.504-.957.886-1.66.886s-1.283-.382-1.66-.886C1.461 13.36 1.25 12.7 1.25 12s.212-1.36.59-1.864"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.5 13.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 20a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.032 1.414a.75.75 0 0 1 .937 0l7.5 6a.75.75 0 1 1-.937 1.172l-.282-.226V20a.75.75 0 0 1-.75.75h-4a.75.75 0 0 0 .75-.75v-5a1.75 1.75 0 0 0-1.75-1.75h-2A1.75 1.75 0 0 0 11.75 15v5c0 .414.336.75.75.75h-4a.75.75 0 0 1-.75-.75V8.36l-.281.226a.75.75 0 1 1-.937-1.172zM12.5 20.75a.75.75 0 0 0 .75-.75v-5a.25.25 0 0 1 .25-.25h2a.25.25 0 0 1 .25.25v5c0 .414.336.75.75.75zm1-12.5a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default House_04;

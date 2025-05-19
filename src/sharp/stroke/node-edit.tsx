import React from "react";
const NodeEdit: React.FC<
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
        d="M18.99 22v-5h-5.997v5z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.994 19.5H5.998v-8m0 0V8m0 3.5h6.496M9.995 8V2H2v6z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m19.765 5.026-4.78 4.758V12h2.171l4.814-4.781a.087.087 0 0 0 0-.124l-2.081-2.07a.09.09 0 0 0-.124 0Z"
      />
    </svg>
  );
};
export default NodeEdit;

import React from "react";
const Pivot: React.FC<
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
        d="M1.75 4.179A2.93 2.93 0 0 1 4.679 1.25H19.32a2.93 2.93 0 0 1 2.929 2.929v7.297a.976.976 0 0 1-1.952 0V9.06H9.56v10.738h.964a.976.976 0 0 1 0 1.952H4.679a2.93 2.93 0 0 1-2.929-2.929zm1.952 4.88v9.762c0 .54.437.977.977.977h2.928V9.06zm3.905-1.952H3.702V4.18c0-.54.437-.977.977-.977h2.928zm1.953 0h10.738V4.18a.976.976 0 0 0-.977-.977H9.56z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.25 14.25a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-3.086l.793.793a1 1 0 0 1-1.414 1.414l-2.5-2.5a1 1 0 0 1 0-1.414l2.5-2.5a1 1 0 0 1 1.414 1.414l-.793.793h3.086a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pivot;

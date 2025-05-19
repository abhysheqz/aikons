import React from "react";
const Loom: React.FC<
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
        d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 3v7h-2V3zm0 11v7h-2v-7zM21 13h-7v-2h7zm-11 0H3v-2h7z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m20.294 8.366-6.062 3.5-1-1.732 6.062-3.5zm-9.526 5.5-6.063 3.5-1-1.732 6.062-3.5zM15.634 20.294l-3.5-6.062 1.732-1 3.5 6.062zm-5.5-9.526-3.5-6.063 1.732-1 3.5 6.063z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m17.366 4.706-3.5 6.062-1.732-1 3.5-6.062zm-5.5 9.526-3.5 6.063-1.732-1 3.5-6.063zM19.294 17.366l-6.062-3.5 1-1.732 6.062 3.5zm-9.527-5.5-6.062-3.5 1-1.732 6.063 3.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Loom;

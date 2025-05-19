import React from "react";
const GameController_03: React.FC<
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
        d="m17.123 3 3 .5-.247 1.48-3-.5zM7.087 4.48l-2.962.5-.25-1.48L6.838 3zM19.077 6.054c-4.408-1.067-9.746-1.067-14.155 0-1.028.248-1.82.99-2.184 1.96-.585 1.56-1.255 4.19-1.482 7.75-.091 1.43.855 2.477 1.814 3.2.85.64 1.882 1.154 2.67 1.546l.33.164.648.326 2.156-3.958h6.266l2.28 3.95.634-.318.224-.113c.801-.4 1.86-.93 2.723-1.604.937-.731 1.833-1.778 1.743-3.192-.227-3.56-.898-6.19-1.482-7.75-.363-.97-1.156-1.713-2.185-1.961m-13.606 6.42.97-.97-.97-.97 1.06-1.06.97.97.97-.97 1.06 1.06-.97.97.97.97-1.06 1.06-.97-.97-.97.97zm9.767-3.22h1.51v1.5h-1.51zm3.51 3h-1.51v1.5h1.51z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GameController_03;

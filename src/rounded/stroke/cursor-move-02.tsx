import React from "react";
const CursorMove_02: React.FC<
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
        d="m8.047 3.449 5.363 2.098c3.093 1.21 4.64 1.816 4.589 2.776s-1.666 1.4-4.894 2.28c-.961.263-1.442.394-1.775.727s-.464.814-.726 1.775c-.88 3.228-1.321 4.843-2.281 4.894s-1.565-1.496-2.776-4.589L3.45 8.047C2.18 4.808 1.548 3.189 2.369 2.368c.82-.82 2.44-.187 5.678 1.08Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 13v2.7m0-2.7c-.45 0-1.53 1.253-1.53 1.253M17.5 13c.451 0 1.53 1.253 1.53 1.253M17.5 22v-2.7m0 2.7c.45 0 1.53-1.253 1.53-1.253M17.5 22c-.45 0-1.53-1.253-1.53-1.253M13 17.501h2.7m-2.7 0c0 .449 1.253 1.53 1.253 1.53M13 17.5c0-.451 1.253-1.53 1.253-1.53M22 17.5h-2.7m2.7 0c0-.451-1.253-1.53-1.253-1.53M22 17.5c0 .449-1.253 1.53-1.253 1.53"
      />
    </svg>
  );
};
export default CursorMove_02;

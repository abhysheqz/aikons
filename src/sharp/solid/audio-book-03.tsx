import React from "react";
const AudioBook_03: React.FC<
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
      <path fill="currentColor" d="M21.75 21.75v-9l-4 2.5h-3v4h3z" />
      <path
        fill="currentColor"
        d="M6.145 1.25A3.9 3.9 0 0 0 2.25 5.158v13.683a3.9 3.9 0 0 0 3.895 3.909H20.52l-3.2-2h-4.07v-7h4.07l3.43-2.144V7.114h-2.922V5.159a.976.976 0 0 0-.974-.977H6.144v1.954h9.736v.978H6.145A1.95 1.95 0 0 1 4.198 5.16v-.002a1.95 1.95 0 0 1 1.947-1.953H20.75V1.25z"
      />
    </svg>
  );
};
export default AudioBook_03;

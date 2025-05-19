import React from "react";
const Note_03: React.FC<
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
        d="M8 3.25h3v-1.5h2v1.5h3v-1.5h2v1.5h3a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V4A.75.75 0 0 1 3 3.25h3v-1.5h2zm9.5 13.987H13v-1.5h4.5zm-4.5-6h4.5v-1.5H13zm-2.531-3.28 1.06 1.06L8 12.549l-2.03-2.03 1.06-1.061.97.97zm1.06 7.06-1.06-1.06-2.47 2.47-.97-.97-1.06 1.06 2.03 2.031z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Note_03;

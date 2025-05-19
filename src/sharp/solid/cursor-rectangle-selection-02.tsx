import React from "react";
const CursorRectangleSelection_02: React.FC<
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
        d="M1.75 1.75h4.375v1.944h-2.43v2.431H1.75zm6.32 0h4.86v1.944H8.07zm6.805 0h4.375v4.375h-1.944v-2.43h-2.431zM3.695 8.07v4.86H1.75V8.07zm15.555 0v2.43h-1.944V8.07zM3.694 14.874v2.43h2.431v1.945H1.75v-4.375zm4.375 2.43H10.5v1.945H8.07z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M8.75 8.75 22.25 14l-6 2.25-2.25 6z" />
    </svg>
  );
};
export default CursorRectangleSelection_02;

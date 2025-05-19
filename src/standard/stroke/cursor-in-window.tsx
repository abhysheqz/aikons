import React from "react";
const CursorInWindow: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 9.5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 7h18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m20.46 13.244-7.795-1.146a.5.5 0 0 0-.567.567l1.146 7.795a.5.5 0 0 0 .848.281l1.721-1.72a.5.5 0 0 1 .707 0l2.626 2.625a.5.5 0 0 0 .708 0l1.792-1.792a.5.5 0 0 0 0-.708L19.02 16.52a.5.5 0 0 1 0-.707l1.721-1.72a.5.5 0 0 0-.28-.849"
      />
    </svg>
  );
};
export default CursorInWindow;

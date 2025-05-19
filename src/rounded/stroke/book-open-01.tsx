import React from "react";
const BookOpen_01: React.FC<
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
        strokeWidth={1.5}
        d="M12 6v14"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.98 3.285c3.342.637 5.333 1.967 6.02 2.731.687-.764 2.678-2.094 6.02-2.73 1.692-.323 2.538-.484 3.26.134.72.617.72 1.62.72 3.626v7.209c0 1.834 0 2.751-.463 3.324-.462.572-1.48.766-3.518 1.154-1.815.346-3.232.896-4.258 1.45-1.01.545-1.514.817-1.761.817s-.752-.272-1.76-.817c-1.027-.553-2.444-1.104-4.26-1.45-2.036-.388-3.055-.582-3.517-1.154C2 17.006 2 16.089 2 14.255V7.046c0-2.006 0-3.009.72-3.626.722-.618 1.568-.457 3.26-.135"
      />
    </svg>
  );
};
export default BookOpen_01;

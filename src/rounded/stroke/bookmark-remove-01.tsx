import React from "react";
const BookmarkRemove_01: React.FC<
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
        d="M11 2C7.229 2 5.343 2 4.172 3.129 3 4.257 3 6.074 3 9.708v8.273c0 2.306 0 3.459.773 3.871 1.496.8 4.304-1.867 5.637-2.67.773-.465 1.16-.698 1.59-.698s.817.233 1.59.698c1.333.803 4.14 3.47 5.637 2.67.773-.412.773-1.565.773-3.871V11.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M3.5 7H11"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m21 2-7 7m7 0-7-7"
      />
    </svg>
  );
};
export default BookmarkRemove_01;

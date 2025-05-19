import React from "react";
const BookmarkOff_01: React.FC<
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
        d="m2 2 20 20M11.5 7.5h8M4.5 4.5v17l7.5-4 7.5 4v-2M7 2.5h10.5a2 2 0 0 1 2 2v11"
      />
    </svg>
  );
};
export default BookmarkOff_01;

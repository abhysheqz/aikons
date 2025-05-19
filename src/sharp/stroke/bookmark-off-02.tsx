import React from "react";
const BookmarkOff_02: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m2 2 20 20"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20 20v2l-8-4-8 4V4m16 12.819V2.01a.01.01 0 0 0-.01-.01H5.177"
      />
    </svg>
  );
};
export default BookmarkOff_02;

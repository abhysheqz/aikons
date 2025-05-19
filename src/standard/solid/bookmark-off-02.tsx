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
        fill="currentColor"
        fillRule="evenodd"
        d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.832 3.832a2.8 2.8 0 0 0-.082.668v17a.75.75 0 0 0 1.103.662L12 18.35l7.147 3.812a.75.75 0 0 0 1.103-.662v-1.25zM20.25 16.714V4.5a2.75 2.75 0 0 0-2.75-2.75h-11c-.36 0-.704.07-1.02.195z"
      />
    </svg>
  );
};
export default BookmarkOff_02;

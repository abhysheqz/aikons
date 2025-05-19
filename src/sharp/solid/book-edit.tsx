import React from "react";
const BookEdit: React.FC<
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
        d="M1.562 2.391a.75.75 0 0 1 .676-.102L11 5.225l8.762-2.936A.75.75 0 0 1 20.75 3v7h-1.5V4.042l-7.5 2.514V20.04l-10.5-3.5V3a.75.75 0 0 1 .312-.609"
      />
      <path
        fill="currentColor"
        d="M18.97 12.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.06l-5.72 5.72h-3.56v-3.56z"
      />
    </svg>
  );
};
export default BookEdit;

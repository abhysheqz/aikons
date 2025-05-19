import React from "react";
const BookBookmark_02: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M8 2v6l2.5-1L13 8V2" />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18.493 21.996H7.519c-2.397.075-3.708-.687-4-2.86m14.974 2.86h1.98m-1.98 0V15.99m0 0h2.005V2H6.4c-1.912.214-3.052 1.291-2.881 4.153v10.282c-.033.765 0 1.832 0 2.7m14.974-3.145-11.005-.011c-2.902-.12-3.89 1.24-3.97 3.156"
      />
    </svg>
  );
};
export default BookBookmark_02;

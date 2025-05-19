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
        stroke="currentColor"
        strokeWidth={1.5}
        d="m19.99 9.79.021-6.567q-.001-.011-.013-.009l-9.006 2.837m0 0L2.013 3.206C2.007 3.204 2 3.21 2 3.215v12.223l8.992 2.79zm8.485 6.546-5.474 5.173v2.346h2.49l5.503-5.168a.01.01 0 0 0 0-.014l-2.505-2.337a.01.01 0 0 0-.014 0Z"
      />
    </svg>
  );
};
export default BookEdit;

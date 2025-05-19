import React from "react";
const BookUpload: React.FC<
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
        d="M9 8.673 12 6l3 2.673M12 13V6.441"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18.493 21.995H7.519c-2.397.076-3.708-.686-4-2.86m14.974 2.86h1.98m-1.98 0V15.99m0 0h2.005V2H6.4c-1.912.214-3.052 1.292-2.881 4.153v10.282c-.033.765 0 1.832 0 2.7m14.974-3.145-11.005-.01c-2.902-.121-3.89 1.239-3.97 3.156"
      />
    </svg>
  );
};
export default BookUpload;

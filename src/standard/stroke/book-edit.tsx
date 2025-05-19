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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 19v2h2l5-5-2-2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 5.5V20s-3.5-3.686-10-2.106v-14.5C8.5 1.814 12 5.5 12 5.5m0 0s3.5-3.686 10-2.106V11.5"
      />
    </svg>
  );
};
export default BookEdit;

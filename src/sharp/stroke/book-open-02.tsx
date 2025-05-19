import React from "react";
const BookOpen_02: React.FC<
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
        d="M11.996 6.917 2.013 4.101C2.007 4.099 2 4.104 2 4.11v14.082l10.05 2.823 9.95-2.84V4.162c0-.006.006-.077 0-.076L18.017 5.21m-6.021 1.707 6.006-3.752c.007-.004.015 0 .015.008V16.31l-5.39 4.25m-.631-13.643.052 13.643"
      />
    </svg>
  );
};
export default BookOpen_02;

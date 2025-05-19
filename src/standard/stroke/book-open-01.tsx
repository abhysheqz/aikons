import React from "react";
const BookOpen_01: React.FC<
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
        strokeWidth={1.5}
        d="M12 5.5v14"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 5.5S8.5 1.814 2 3.394v14.5C8.5 16.314 12 20 12 20s3.5-3.686 10-2.106v-14.5C15.5 1.814 12 5.5 12 5.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 7.001c2 0 3 .499 4 .999m-4 3c2 0 3 .499 4 .999"
      />
    </svg>
  );
};
export default BookOpen_01;

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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 7S8.5 3.314 2 4.894v14.5c6.5-1.58 10 2.106 10 2.106s3.5-3.686 10-2.106v-14.5c-1.494-.363-2.83-.448-4-.364"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 2.5S13.5 3 12 7v14.5c1.5-4 6-5.5 6-5.5z"
      />
    </svg>
  );
};
export default BookOpen_02;

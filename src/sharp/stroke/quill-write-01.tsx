import React from "react";
const QuillWrite_01: React.FC<
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
        d="M4 21.966c0-7.488 7-10.982 7-10.982"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.457 4.86c3.395-2.446 7.392-2.89 9.545-2.89 0 .829-.157 2.703-.986 4.427-.825 1.715-2.42 2.594-3.983 2.603a.01.01 0 0 0-.007.017l1.947 1.992a.01.01 0 0 1 0 .014c-3.088 3.03-3.969 3.357-5.729 4.322-1.356.743-5.164 1.759-6.097 1.759-.425 0 .068-3.36.415-5.017.55-2.629 2.777-5.7 4.895-7.226Z"
      />
    </svg>
  );
};
export default QuillWrite_01;

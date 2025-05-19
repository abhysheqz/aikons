import React from "react";
const CursorInfo_02: React.FC<
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
        d="M17.75 14.75c-.553 0-1 .448-1 .998v1h-2v-1a3 3 0 0 1 3-2.998 2.999 2.999 0 0 1 2.045 5.191l-.126.117c-.276.256-.502.465-.68.69-.198.25-.239.4-.239.495v1h-2v-1c0-.732.338-1.316.67-1.736.284-.358.636-.683.901-.928q.06-.053.11-.102a.999.999 0 0 0-.682-1.727m1 5.99v2.01h-2v-2.01z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m3.25 1.25 17.5 6.806-7.778 2.916-2.916 7.778z"
      />
    </svg>
  );
};
export default CursorInfo_02;

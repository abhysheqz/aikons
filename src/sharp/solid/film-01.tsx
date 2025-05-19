import React from "react";
const Film_01: React.FC<
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
        d="M2.726 1.75a.976.976 0 0 0-.976.976v18.548c0 .539.437.976.976.976h18.548c.539 0 .976-.437.976-.976V2.726a.976.976 0 0 0-.976-.976zM3.703 16V8H11v8zM13 16h7.298V8H13zM7 3.702V6h2V3.702zm10 0V6h-2V3.702zM7 18v2.297h2V18zm8 0v2.297h2V18z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Film_01;

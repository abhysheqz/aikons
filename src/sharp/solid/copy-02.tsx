import React from "react";
const Copy_02: React.FC<
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
        d="M9.217 8.25h2.9v1.933h-1.934v1.934H8.25v-2.9c0-.534.433-.967.967-.967m7.733 1.933h-2.9V8.25h2.9zm3.867 0h-.967V8.25h1.933c.534 0 .967.433.967.967v2.9h-1.933zM8.25 16.95v-2.9h1.933v2.9zm12.567 0v-2.9h1.933v2.9zm1.933 1.933v2.9a.967.967 0 0 1-.967.967h-2.9v-1.933h1.934v-1.934zm-14.5 2.9V19.85h1.933v.967h1.934v1.933h-2.9a.967.967 0 0 1-.967-.967m8.7.967h-2.9v-1.933h2.9z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.47 1.47A.75.75 0 0 1 2 1.25l15 .01a.75.75 0 0 1 .75.75v4.74l-.003.003L9 6.758a2.25 2.25 0 0 0-2.249 2.25v8.742H2a.75.75 0 0 1-.75-.75V2c0-.199.08-.39.22-.53"
      />
    </svg>
  );
};
export default Copy_02;

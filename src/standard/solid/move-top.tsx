import React from "react";
const MoveTop: React.FC<
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
        d="M15.973 4.43c.192.166.28.407.258.641-.028.291-.345.417-.637.417H13v6.28a1 1 0 1 1-2 0v-6.28H8.375c-.292 0-.61-.126-.637-.417a.75.75 0 0 1 .258-.64l3.5-3a.75.75 0 0 1 .976 0zm-3.965 18.32a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoveTop;

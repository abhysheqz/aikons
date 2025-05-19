import React from "react";
const UserFullView: React.FC<
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
        d="M8.25 5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      />
      <path
        fill="currentColor"
        d="m7.92 8.379.53.487A5.23 5.23 0 0 0 12 10.25a5.23 5.23 0 0 0 3.547-1.38l.53-.486.507.508c1.565 1.568 3.112 4.663 1.451 7.692l-.213.389h-2L14.09 22.75H9.897l-1.718-5.777H6.183l-.213-.389c-1.666-3.03-.125-6.129 1.442-7.696z"
      />
    </svg>
  );
};
export default UserFullView;

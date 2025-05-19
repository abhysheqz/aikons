import React from "react";
const UserLove_02: React.FC<
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
        d="M3.75 8a5.25 5.25 0 1 1 7.005 4.95 7.75 7.75 0 0 1 5.995 7.55v.75H1.25v-.75a7.75 7.75 0 0 1 5.995-7.55A5.25 5.25 0 0 1 3.75 8"
      />
      <path
        fill="currentColor"
        d="M15.25 11.028c0-1.232.942-2.278 2.25-2.278.662 0 1.157.232 1.5.503.343-.27.838-.503 1.5-.503 1.308 0 2.25 1.046 2.25 2.278 0 1.43-.987 2.492-1.782 3.127a8.5 8.5 0 0 1-1.133.759c-.153.086-.835.406-.835.406s-.682-.32-.835-.406a8.5 8.5 0 0 1-1.133-.758c-.795-.636-1.782-1.698-1.782-3.128"
      />
    </svg>
  );
};
export default UserLove_02;

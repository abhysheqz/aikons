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
        d="M15.25 11.028c0-1.232.942-2.278 2.25-2.278.46 0 .896.096 1.282.326q.116.069.218.15a2 2 0 0 1 .218-.15c.386-.23.821-.326 1.282-.326 1.308 0 2.25 1.046 2.25 2.278 0 1.43-.987 2.492-1.782 3.127a8.5 8.5 0 0 1-1.133.759c-.148.083-.42.217-.522.267l-.01.005a.75.75 0 0 1-.606 0l-.01-.005c-.102-.05-.374-.184-.523-.267a8.5 8.5 0 0 1-1.132-.758c-.795-.636-1.782-1.698-1.782-3.128"
      />
      <path
        fill="currentColor"
        d="M7.245 12.95A7.75 7.75 0 0 0 1.25 20.5c0 .414.336.75.75.75h14a.75.75 0 0 0 .75-.75 7.75 7.75 0 0 0-5.995-7.55A5.252 5.252 0 0 0 9 2.75a5.25 5.25 0 0 0-1.755 10.2"
      />
    </svg>
  );
};
export default UserLove_02;

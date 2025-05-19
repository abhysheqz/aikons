import React from "react";
const UserEdit_01: React.FC<
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
        d="M17.823 13.616a1.25 1.25 0 0 1 1.768 0l1.293 1.293a1.25 1.25 0 0 1 0 1.768L16.53 21.03a.75.75 0 0 1-.383.205l-2.5.5a.75.75 0 0 1-.883-.882l.5-2.5a.75.75 0 0 1 .206-.383zM11.516 20.75q.009-.071.023-.142l.5-2.5a2 2 0 0 1 .547-1.022l2.964-2.965a7.7 7.7 0 0 0-3.295-1.671A5.252 5.252 0 0 0 10.5 2.25a5.25 5.25 0 0 0-1.755 10.2A7.75 7.75 0 0 0 2.75 20c0 .414.336.75.75.75z"
      />
    </svg>
  );
};
export default UserEdit_01;

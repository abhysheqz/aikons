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
        d="M17.533 13.781a1.813 1.813 0 0 1 2.563 0l.623.623a1.813 1.813 0 0 1 0 2.563l-3.349 3.35c-.55.549-1.25.924-2.012 1.076l-1.71.342a.75.75 0 0 1-.883-.882l.342-1.71a3.94 3.94 0 0 1 1.077-2.013zM11.516 20.75q.008-.071.023-.142l.342-1.71a5.2 5.2 0 0 1 1.419-2.652l2.182-2.182a7.7 7.7 0 0 0-3.227-1.614A5.252 5.252 0 0 0 10.5 2.25a5.25 5.25 0 0 0-1.755 10.2A7.75 7.75 0 0 0 2.75 20c0 .414.336.75.75.75z"
      />
    </svg>
  );
};
export default UserEdit_01;

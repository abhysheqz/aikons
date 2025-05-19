import React from "react";
const Delete_01: React.FC<
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
        d="m20.248 5.545-1 16.5a.75.75 0 0 1-.748.705h-13a.75.75 0 0 1-.749-.705l-1-16.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.58 1.856a1 1 0 0 1 .92-.606h5a1 1 0 0 1 .92.606l1.24 2.894H22v2H2v-2h5.34zm.937 2.894h4.967l-.643-1.5h-3.682z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Delete_01;

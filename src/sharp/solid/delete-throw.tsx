import React from "react";
const DeleteThrow: React.FC<
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
        d="M3.954 4.986A.75.75 0 0 1 4.5 4.75h15a.75.75 0 0 1 .749.795l-1 16.5a.75.75 0 0 1-.749.705h-13a.75.75 0 0 1-.749-.705l-1-16.5a.75.75 0 0 1 .203-.559m11.575 8.484L12 9.94l-3.53 3.53 1.06 1.06 1.72-1.72V19h1.5v-6.19l1.72 1.72z"
        clipRule="evenodd"
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
export default DeleteThrow;

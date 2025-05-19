import React from "react";
const Delete_04: React.FC<
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
        d="m16.5 17.086 2.793-2.793 1.414 1.414-2.793 2.793 2.793 2.793-1.414 1.414-2.793-2.793-2.793 2.793-1.414-1.415 2.793-2.792-2.793-2.792 1.414-1.415z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m3.751 5.545 1 16.5a.75.75 0 0 0 .749.705h6.13l-1.459-1.458 2.793-2.792-2.793-2.792 3.536-3.536 2.793 2.793 3.382-3.383.366-6.037z"
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
export default Delete_04;

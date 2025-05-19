import React from "react";
const Delete_03: React.FC<
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
        d="M8.58 1.856a1 1 0 0 1 .92-.606h5a1 1 0 0 1 .92.606l1.24 2.894H22v2H2v-2h5.34zm.937 2.894h4.967l-.643-1.5h-3.682z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m19.25 22.045 1-16.5H3.751l1 16.5a.75.75 0 0 0 .749.705h13a.75.75 0 0 0 .748-.705M8.5 13h7v-2h-7zm1.5 4h3.5v-2h-3.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Delete_03;

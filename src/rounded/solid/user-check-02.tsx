import React from "react";
const UserCheck_02: React.FC<
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
        d="M7.245 12.95A7.75 7.75 0 0 0 1.25 20.5c0 .414.336.75.75.75h14a.75.75 0 0 0 .75-.75 7.75 7.75 0 0 0-5.995-7.55A5.252 5.252 0 0 0 9 2.75a5.25 5.25 0 0 0-1.755 10.2"
      />
      <path
        fill="currentColor"
        d="M22.637 8.538a1 1 0 0 1-.425 1.35c-.972.505-1.907 1.582-2.637 2.646-.354.516-.637.996-.832 1.346-.098.175-.242.457-.292.553a1 1 0 0 1-1.748.1c-.206-.33-.546-.645-.88-.896a9 9 0 0 0-.55-.365 1 1 0 0 1 .954-1.758 8 8 0 0 1 1.122.783c.166-.274.36-.577.576-.894.77-1.122 1.935-2.546 3.363-3.29a1 1 0 0 1 1.349.425"
      />
    </svg>
  );
};
export default UserCheck_02;

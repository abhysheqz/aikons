import React from "react";
const VirtualRealityVr_02: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3z"
      />
      <path
        fill="currentColor"
        d="M14 9v-.75a.75.75 0 0 0-.75.75zm2.25 0v.75zm-3 6a.75.75 0 0 0 1.5 0zm3.58.335a.75.75 0 1 0 1.34-.67zM6.711 8.763a.75.75 0 1 0-1.424.474zM7.997 15l-.712.237a.75.75 0 0 0 .712.513zM9 15v.75a.75.75 0 0 0 .712-.513zm2.711-5.763a.75.75 0 1 0-1.422-.474zM14 9.75h2.25v-1.5H14zm.75 5.25v-2.5h-1.5V15zm0-2.5V9h-1.5v3.5zm1.5-.75H14v1.5h2.25zm1-1a1 1 0 0 1-1 1v1.5a2.5 2.5 0 0 0 2.5-2.5zm-1-1a1 1 0 0 1 1 1h1.5a2.5 2.5 0 0 0-2.5-2.5zm-.67 3.085 1.25 2.5 1.34-.67-1.25-2.5zM5.287 9.237l1.997 6 1.424-.474-1.997-6zm2.709 6.513H9v-1.5H7.997zm1.715-.513 2-6-1.423-.474-2 6z"
      />
    </svg>
  );
};
export default VirtualRealityVr_02;

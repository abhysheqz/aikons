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
        fill="currentColor"
        fillRule="evenodd"
        d="M5 2.25A3.75 3.75 0 0 0 1.25 6v12A3.75 3.75 0 0 0 5 21.75h14A3.75 3.75 0 0 0 22.75 18V6A3.75 3.75 0 0 0 19 2.25zm6.712 6.987a.75.75 0 0 0-1.423-.474l-1.79 5.37-1.787-5.37a.75.75 0 1 0-1.423.474l1.997 6a.75.75 0 0 0 .711.513H9a.75.75 0 0 0 .712-.513zM14 8.25a.75.75 0 0 0-.75.75v6a.75.75 0 0 0 1.5 0v-1.75h1.037l1.042 2.086a.75.75 0 1 0 1.342-.671L17.339 13a2.5 2.5 0 0 0-1.089-4.75zm2.25 3.5h-1.5v-2h1.5a1 1 0 1 1 0 2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default VirtualRealityVr_02;

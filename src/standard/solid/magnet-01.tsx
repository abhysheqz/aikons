import React from "react";
const Magnet_01: React.FC<
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
        d="M4 8.25a.75.75 0 0 0-.75.75v2.25h5.5V9A.75.75 0 0 0 8 8.25zm4.75 4.5h-5.5V14a8.75 8.75 0 1 0 17.5 0v-1.25h-5.5V14a3.25 3.25 0 0 1-6.5 0zm6.5-1.5h5.5V9a.75.75 0 0 0-.75-.75h-4a.75.75 0 0 0-.75.75zM18 1.25a.75.75 0 0 1 .75.75v1.25H20a.75.75 0 0 1 0 1.5h-1.25V6a.75.75 0 0 1-1.5 0V4.75H16a.75.75 0 0 1 0-1.5h1.25V2a.75.75 0 0 1 .75-.75M3.25 4A.75.75 0 0 1 4 3.25h4a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Magnet_01;

import React from "react";
const SharedDrive: React.FC<
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
        d="M20.75 4A2.75 2.75 0 0 0 18 1.25H6A2.75 2.75 0 0 0 3.25 4v16A2.75 2.75 0 0 0 6 22.75h12A2.75 2.75 0 0 0 20.75 20zm-16 16c0-.69.56-1.25 1.25-1.25h12a1.25 1.25 0 0 1 0 2.5H6c-.69 0-1.25-.56-1.25-1.25m3-12.5a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M6.25 13A2.75 2.75 0 0 1 9 10.25h1A2.75 2.75 0 0 1 12.75 13v1.25h-6.5zm8.25-7.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m.5 4.5h-1.25v4h4V13A2.75 2.75 0 0 0 15 10.25m2.25 9v1.51h-1.5v-1.51zm-3 1.51v-1.51h-1.5v1.51z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SharedDrive;

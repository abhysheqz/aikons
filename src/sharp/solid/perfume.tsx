import React from "react";
const Perfume: React.FC<
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
        d="M15.113 22.46c-.04.037-.35.29-.35.29H4.237s-.31-.253-.35-.29a6 6 0 0 1-.324-.321 8 8 0 0 1-.948-1.236c-.686-1.093-1.365-2.721-1.365-4.87 0-3.312 1.972-6.163 4.805-7.46.57-.26 1.075-.323 1.627-.323h3.636c.552 0 1.058.063 1.627.323 2.833 1.297 4.805 4.148 4.805 7.46 0 2.149-.679 3.777-1.365 4.87a8 8 0 0 1-.948 1.236c-.131.14-.242.247-.324.321"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.75 2.25h-4.5v3H7a.75.75 0 0 0-.75.75v3h1.5V6.75h3.5V9h1.5V6a.75.75 0 0 0-.75-.75h-.25zm-1.5 3v-1.5h-1.5v1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.25 5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 4.75H5v-1.5h3zm8 0h-5v-1.5h5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Perfume;

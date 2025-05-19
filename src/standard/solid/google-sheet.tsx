import React from "react";
const GoogleSheet: React.FC<
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
        d="m14.25 1.251-.078-.001H6A2.75 2.75 0 0 0 3.25 4v16A2.75 2.75 0 0 0 6 22.75h12A2.75 2.75 0 0 0 20.75 20V7.828l-.001-.078H16A1.75 1.75 0 0 1 14.25 6zm6.002 5a3 3 0 0 0-.307-.367l-3.829-3.829a3 3 0 0 0-.366-.307V6c0 .138.112.25.25.25zM6.75 12a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75zm1.5.75v1.5h3v-1.5zm4.5 0v1.5h3v-1.5zm3 4.5v-1.5h-3v1.5zm-4.5 0v-1.5h-3v1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GoogleSheet;

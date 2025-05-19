import React from "react";
const RestoreBin: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.183 15.221a4.67 4.67 0 0 1 7.919.48l-1.644.92a2.81 2.81 0 0 0-1.736-1.373c-1.503-.407-3.048.495-3.45 2.015l-.187.703h-1.577L11 15.125l1.655-.898zm8.417 2.813H19.9l-.186.704c-.403 1.52-1.948 2.422-3.451 2.014a2.8 2.8 0 0 1-1.711-1.327l-1.627.95a4.7 4.7 0 0 0 2.852 2.212 4.67 4.67 0 0 0 5.05-1.843l.488 1L23 20.903zM8.08 1.856A1 1 0 0 1 9 1.25h5a1 1 0 0 1 .92.606l1.24 2.894h5.34v2h-20v-2h5.34zm.937 2.894h4.967l-.643-1.5H9.659z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.454 4.986A.75.75 0 0 1 4 4.75h15a.75.75 0 0 1 .749.795l-.405 6.673a6.134 6.134 0 0 0-5.758.563l-.315-.596-4.292 2.33 2.604 4.907-.696.406.737 1.29a6.3 6.3 0 0 0 1.342 1.632H5a.75.75 0 0 1-.749-.705l-1-16.5a.75.75 0 0 1 .203-.56"
      />
    </svg>
  );
};
export default RestoreBin;

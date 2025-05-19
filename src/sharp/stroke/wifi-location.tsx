import React from "react";
const WifiLocation: React.FC<
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
        d="M12 2v-.75zm0 20-.395.638.393.243.394-.241zM3 10.926h-.75zm17.25 0c0 2.214-1.14 4.213-2.84 5.994-1.696 1.778-3.879 3.264-5.802 4.44l.784 1.28c1.953-1.195 4.27-2.762 6.104-4.685 1.832-1.92 3.254-4.272 3.254-7.03zm-7.855 10.436c-1.923-1.19-4.106-2.671-5.804-4.445-1.7-1.776-2.841-3.77-2.841-5.991h-1.5c0 2.765 1.424 5.112 3.257 7.028 1.835 1.917 4.152 3.479 6.098 4.684zM3.75 10.926c0-4.47 3.784-8.176 8.25-8.176v-1.5c-5.275 0-9.75 4.36-9.75 9.676zM12 2.75c4.466 0 8.25 3.706 8.25 8.176h1.5c0-5.316-4.474-9.676-9.75-9.676z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 9.478C9.149 8.543 10.52 8 11.995 8c1.478 0 2.854.547 4.005 1.487M14.174 12a4.1 4.1 0 0 0-2.18-.64c-.779 0-1.516.229-2.17.634"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15h.006"
      />
    </svg>
  );
};
export default WifiLocation;

import React from "react";
const FileVideo: React.FC<
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
        d="M11.25 17c0-.966.784-1.75 1.75-1.75h4c.966 0 1.75.784 1.75 1.75v.5l1.915-1.17a.75.75 0 0 1 1.085.67v4a.75.75 0 0 1-1.085.67L18.75 20.5v.5A1.75 1.75 0 0 1 17 22.75h-4A1.75 1.75 0 0 1 11.25 21z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.274 19.823a2.924 2.924 0 0 0 2.917 2.927h5.372A3 3 0 0 1 10 21v-4a3 3 0 0 1 3-3h4a3 3 0 0 1 2.637 1.567l.113-.099V9.055a.98.98 0 0 0-.285-.692l-6.809-6.827a.97.97 0 0 0-.687-.286H5.168A2.924 2.924 0 0 0 2.25 4.186zm9.293-16.617 6.237 6.255h-4.737a1.5 1.5 0 0 1-1.5-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileVideo;

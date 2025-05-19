import React from "react";
const DocumentAttachment: React.FC<
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
        d="M5.5 1.25A2.75 2.75 0 0 0 2.75 4v16a2.75 2.75 0 0 0 2.75 2.75h7.455a3.74 3.74 0 0 1-.955-2.5v-3.5c0-1.389.63-2.673 1.498-3.586.882-.929 2.194-1.664 3.752-1.664s2.87.735 3.752 1.664q.128.134.248.279V4a2.75 2.75 0 0 0-2.75-2.75zM6.75 6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9A.75.75 0 0 1 6.75 6m.75 3.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.404 14.025c.694-.73 1.694-1.275 2.846-1.275s2.152.544 2.846 1.275c.688.724 1.154 1.71 1.154 2.725v3a1 1 0 1 1-2 0v-3c0-.415-.205-.928-.604-1.347-.391-.412-.892-.653-1.396-.653s-1.005.24-1.396.653c-.399.419-.604.932-.604 1.347v3.5a.5.5 0 0 0 1 0v-3.5a1 1 0 1 1 2 0v3.5a2.5 2.5 0 0 1-5 0v-3.5c0-1.014.466-2.001 1.154-2.725"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DocumentAttachment;

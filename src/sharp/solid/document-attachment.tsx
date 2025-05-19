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
        d="M2.75 1.25h18.5v12.193a6 6 0 0 0-.248-.279c-.882-.929-2.194-1.664-3.752-1.664s-2.87.735-3.752 1.664C12.63 14.077 12 15.361 12 16.75v3.5c0 .96.361 1.837.955 2.5H2.75zM17.25 5H6.75v1.5h10.5zm-3 4h-7.5v1.5h7.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.404 14.025c.694-.73 1.694-1.275 2.846-1.275s2.152.544 2.846 1.275c.688.724 1.154 1.71 1.154 2.725v4h-2v-4c0-.415-.205-.928-.604-1.347-.391-.412-.892-.653-1.396-.653s-1.005.24-1.396.653c-.399.419-.604.932-.604 1.347v3.5a.5.5 0 0 0 1 0v-3.5h2v3.5a2.5 2.5 0 0 1-5 0v-3.5c0-1.014.466-2.001 1.154-2.725"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DocumentAttachment;

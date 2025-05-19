import React from "react";
const FileLink: React.FC<
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
        d="M5.17 3.17c.56-.56 1.468-.56 2.028 0l.53.53 1.06-1.06-.53-.53A2.934 2.934 0 1 0 4.11 6.257l1.93 1.93a2.934 2.934 0 0 0 3.99.15l.567-.49-.98-1.137-.567.49A1.434 1.434 0 0 1 7.1 7.128l-1.93-1.93a1.434 1.434 0 0 1 0-2.028m2.782 2.629a1.434 1.434 0 0 1 1.948.073l1.93 1.93A1.434 1.434 0 0 1 9.803 9.83l-.53-.53-1.061 1.06.53.53a2.934 2.934 0 0 0 4.149-4.148l-1.93-1.93a2.934 2.934 0 0 0-3.989-.15l-.568.49.98 1.136z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.25 7.167 4.608 4.608a4.184 4.184 0 0 0 5.917-5.917L9.167 1.25H20.75v14.12l-7.39 7.38H3.252zm9.312 13.628L18.8 14.54h-6.237z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileLink;

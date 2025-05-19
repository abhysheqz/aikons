import React from "react";
const ImageAdd_01: React.FC<
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
        d="M17.499 4.5v-3h2v3h3v2h-3v3h-2v-3h-3v-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.5 2.5h10.7v5.3h3v3h5.3v10.7a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-18a1 1 0 0 1 1-1m17 18H6.732l7.837-7.053 4.931 3.288z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageAdd_01;

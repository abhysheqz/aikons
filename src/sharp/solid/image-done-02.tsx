import React from "react";
const ImageDone_02: React.FC<
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
        d="M1.75 2.25h16.547L15.87 5.32l-2.1-2.003-3.106 3.256 5.673 5.414 5.913-7.482V22.75H1.75zm7.248 8.254 5.25 5.25L17 13.002l3.298 2.931v4.865H3.702V15.8z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m22.25 2.49-6.042 7.646-3.776-3.604 1.38-1.446L16 7.173l4.68-5.923z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageDone_02;

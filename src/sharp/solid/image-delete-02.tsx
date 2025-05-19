import React from "react";
const ImageDelete_02: React.FC<
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
        d="M1.75 1.75h11.318l-1.414 1.414 3 3-3 3 3.182 3.182 3-3 3 3 1.414-1.414V22.25H1.75zm7.248 8.254 5.25 5.25L17 12.502l3.298 2.931v4.864H3.702V15.3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m14.836 1.75 3 3 3-3 1.414 1.414-3 3 3 3-1.414 1.414-3-3-3 3-1.414-1.414 3-3-3-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageDelete_02;

import React from "react";
const ImageUpload: React.FC<
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
        d="M1.75 1.749h14.318l-4.414 4.414 3.182 3.182.75-.75v3.318h4.5V8.595l.75.75 1.414-1.414V22.25H1.75zm7.248 8.256 5.25 5.25L17 12.503l3.298 2.931V20.3H3.702V15.3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m22.25 6.164-1.414 1.414-2-2v5.086h-2V5.578l-2 2-1.414-1.414 4.414-4.414z"
      />
    </svg>
  );
};
export default ImageUpload;

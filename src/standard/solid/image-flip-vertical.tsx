import React from "react";
const ImageFlipVertical: React.FC<
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
        d="M4.632 1.346a.75.75 0 0 1 .757.013l14 8.5A.75.75 0 0 1 19 11.25H5a.75.75 0 0 1-.75-.75V2c0-.27.146-.52.382-.654M4.25 13.5a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 .39 1.391l-14 8.5A.75.75 0 0 1 4.25 22z"
      />
    </svg>
  );
};
export default ImageFlipVertical;

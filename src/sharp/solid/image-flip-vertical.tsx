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
        fillRule="evenodd"
        d="m19.75 11.25-15.5-10v10zm0 1.5H4.25v10z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageFlipVertical;

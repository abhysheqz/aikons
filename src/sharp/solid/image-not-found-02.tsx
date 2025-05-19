import React from "react";
const ImageNotFound_02: React.FC<
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
        d="m20.832 21.992.711.711 1.414-1.414-.707-.707v-.008l-2-2v.008l-5.305-5.306.003-.003-11.28-11.28H3.66l-.703-.704-1.414 1.414.707.707v17.582a1 1 0 0 0 1 1zm-2-2-5.376-5.376-5.974 5.376zm3.418-1.539V2.993a1 1 0 0 0-1-1H5.79z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageNotFound_02;

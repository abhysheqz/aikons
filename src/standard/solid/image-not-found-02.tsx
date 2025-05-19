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
        d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.25 4.5v14.214L5.286 1.75H19.5a2.75 2.75 0 0 1 2.75 2.75m-20.5 0c0-.76.308-1.447.806-1.945l18.889 18.89a2.74 2.74 0 0 1-1.945.805h-15a2.75 2.75 0 0 1-2.75-2.75zm1.953 14.821c0 .54.437.976.976.976h10.005c-.657-2.002-1.9-3.752-3.49-4.963-2.07-1.578-4.533-2.19-7.49-2.31z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageNotFound_02;

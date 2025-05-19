import React from "react";
const CameraAi: React.FC<
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
        d="M15.655 3.384A2.75 2.75 0 0 0 13.43 2.25h-2.86c-.92 0-1.778.46-2.288 1.225L7.1 5.25H4A2.75 2.75 0 0 0 1.25 8v11A2.75 2.75 0 0 0 4 21.75h16A2.75 2.75 0 0 0 22.75 19V8c0-.28-.042-.552-.12-.807-.27.382-.687.678-1.251.793a1.79 1.79 0 0 0-1.393 1.393c-.442 2.161-3.53 2.161-3.972 0a1.79 1.79 0 0 0-1.393-1.393c-2.161-.442-2.161-3.53 0-3.972a1.8 1.8 0 0 0 1.034-.63M16 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0m2.761-10.129c-.17-.828-1.353-.828-1.522 0A3.04 3.04 0 0 1 14.87 5.24c-.828.17-.828 1.353 0 1.522A3.04 3.04 0 0 1 17.24 9.13c.17.828 1.353.828 1.522 0A3.04 3.04 0 0 1 21.13 6.76c.828-.17.828-1.353 0-1.522A3.04 3.04 0 0 1 18.76 2.87"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CameraAi;

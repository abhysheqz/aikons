import React from "react";
const CameraAdd_03: React.FC<
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
        d="M10.57 2.25c-.92 0-1.778.46-2.288 1.225L7.1 5.25H4A2.75 2.75 0 0 0 1.25 8v11A2.75 2.75 0 0 0 4 21.75h16A2.75 2.75 0 0 0 22.75 19V8A2.75 2.75 0 0 0 20 5.25h-3.099l-1.183-1.775A2.75 2.75 0 0 0 13.43 2.25zM13 9a1 1 0 1 0-2 0v3H8a1 1 0 1 0 0 2h3v3a1 1 0 1 0 2 0v-3h3a1 1 0 1 0 0-2h-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CameraAdd_03;

import React from "react";
const CameraAutomatically_02: React.FC<
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
        d="M7.56 3.447A1.75 1.75 0 0 1 9.22 2.25h5.56a1.75 1.75 0 0 1 1.66 1.197l.6 1.803H20A2.75 2.75 0 0 1 22.75 8v11A2.75 2.75 0 0 1 20 21.75H4A2.75 2.75 0 0 1 1.25 19V8A2.75 2.75 0 0 1 4 5.25h2.96zM11 6a1 1 0 1 1 1 1 1 1 0 0 1-1-1m.5 4a1 1 0 0 0-.933.641l-2.5 6.5a1 1 0 1 0 1.867.718l.522-1.359h3.088l.523 1.359a1 1 0 1 0 1.867-.718l-2.5-6.5A1 1 0 0 0 12.5 10zm1.275 4.5h-1.55L12 12.486z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CameraAutomatically_02;

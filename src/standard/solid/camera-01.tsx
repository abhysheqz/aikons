import React from "react";
const Camera_01: React.FC<
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
        d="m17.04 5.25-.6-1.803a1.75 1.75 0 0 0-1.66-1.197H9.22a1.75 1.75 0 0 0-1.66 1.197l-.6 1.803H4.5a2.75 2.75 0 0 0-2.75 2.732l-.5 11.001V19A2.75 2.75 0 0 0 4 21.75h16A2.75 2.75 0 0 0 22.75 19v-.017l-.5-11.001A2.75 2.75 0 0 0 19.5 5.25zm-8.79 9a4 4 0 1 1 8.002.002 4 4 0 0 1-8.002-.002M12 5a1 1 0 1 0 0 2 1 1 0 1 0 0-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Camera_01;

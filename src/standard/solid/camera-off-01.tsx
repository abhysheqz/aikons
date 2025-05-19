import React from "react";
const CameraOff_01: React.FC<
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
        d="M1.066 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.519 4.33h-.543a2.75 2.75 0 0 0-2.75 2.732l-.5 11.001v.017a2.75 2.75 0 0 0 2.75 2.75h16c.448 0 .872-.107 1.245-.297l-5.413-5.414a4.002 4.002 0 1 1-5.369-5.368z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.73 13.418v-.088a4 4 0 0 0-4.088-3.999L7.488 4.177l.55-1.65a1.75 1.75 0 0 1 1.66-1.197h5.558a1.75 1.75 0 0 1 1.66 1.197l.602 1.803h2.46a2.75 2.75 0 0 1 2.75 2.732l.5 11.001v.017c0 .525-.148 1.016-.404 1.433zM11.476 5.08a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CameraOff_01;

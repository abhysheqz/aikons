import React from "react";
const CameraOff_02: React.FC<
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
        d="M6.66 5.25H4A2.75 2.75 0 0 0 1.25 8v11A2.75 2.75 0 0 0 4 21.75h16c.864 0 1.634-.398 2.139-1.021l-6.174-6.174A4.002 4.002 0 0 1 8 14c0-2.021 1.5-3.692 3.448-3.962zM15.368 11.838l-1.203-1.203-6.75-6.751.145-.437A1.75 1.75 0 0 1 9.22 2.25h5.558a1.75 1.75 0 0 1 1.66 1.197l.602 1.803H20A2.75 2.75 0 0 1 22.75 8v11q0 .107-.009.211zM10.999 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CameraOff_02;

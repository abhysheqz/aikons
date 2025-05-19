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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.076 10.076a3.5 3.5 0 1 0 4.848 4.848"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6h.009"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m2 2 20 20" />
      <path
        fill="currentColor"
        d="M2.001 21h-.75c0 .415.336.75.75.75zm15-15-.67.336.206.414h.464zm5 0h.75a.75.75 0 0 0-.75-.75zm-20 .001v-.75h-.75v.75zm13-4 .67-.336a.75.75 0 0 0-.67-.415zm-6 0v-.75a.75.75 0 0 0-.67.414zm-7 19.75h19v-1.5h-19zm15-15h5v-1.5h-5zM2.751 21V6h-1.5v15zm-.75-14.25h4v-1.5h-4zm12.33-4.415 2 4 1.34-.671-2-4zM15 1.25h-6v1.5h6zM8.399 4.881l1.273-2.545-1.342-.671L7.058 4.21zm12.853 1.12v12.818h1.5V6z"
      />
    </svg>
  );
};
export default CameraOff_02;

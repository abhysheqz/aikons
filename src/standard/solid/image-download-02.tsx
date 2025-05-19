import React from "react";
const ImageDownload_02: React.FC<
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
        d="M4.679 1.75H16v2.878a2.25 2.25 0 0 0-2.341 3.713l3 3a2.25 2.25 0 0 0 3.182 0l2.409-2.409v10.39a2.93 2.93 0 0 1-2.929 2.928H4.68a2.93 2.93 0 0 1-2.929-2.929V4.68A2.93 2.93 0 0 1 4.679 1.75m4.071 9.252c.48 0 .94.19 1.28.53l3.97 3.97 1.97-1.97a1.81 1.81 0 0 1 2.56 0l1.768 1.768v4.021c0 .54-.437.977-.977.977H4.68a.976.976 0 0 1-.977-.977V15.3l3.768-3.768c.34-.34.8-.53 1.28-.53"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.25 1.75a1 1 0 0 1 1 1v4.586l1.293-1.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414l1.293 1.293V2.75a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageDownload_02;

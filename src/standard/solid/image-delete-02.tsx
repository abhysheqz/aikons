import React from "react";
const ImageDelete_02: React.FC<
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
        d="M4.679 1.75h8.555a2.25 2.25 0 0 0 .425 2.591l1.409 1.41-1.409 1.408a2.25 2.25 0 1 0 3.182 3.182l1.409-1.409 1.409 1.41c.701.7 1.75.842 2.591.425v8.555a2.93 2.93 0 0 1-2.929 2.928H4.68a2.93 2.93 0 0 1-2.929-2.928V4.679A2.93 2.93 0 0 1 4.679 1.75m4.071 9.252c.48 0 .94.191 1.28.53l3.97 3.97 1.97-1.97a1.81 1.81 0 0 1 2.56 0l1.768 1.768v4.022c0 .539-.437.976-.977.976H4.68a.976.976 0 0 1-.977-.976V15.3l3.768-3.767c.34-.34.8-.53 1.28-.53"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.543 2.043a1 1 0 0 1 1.414 0l2.293 2.293 2.293-2.293a1 1 0 1 1 1.414 1.414L19.664 5.75l2.293 2.293a1 1 0 0 1-1.414 1.414L18.25 7.164l-2.293 2.293a1 1 0 1 1-1.414-1.414l2.293-2.293-2.293-2.293a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageDelete_02;

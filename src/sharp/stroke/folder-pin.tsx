import React from "react";
const FolderPin: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M8 6.994h4.018m0 0H22v3.003m-9.982-3.003L9 3H2v18h11M19 18h-3v-.5l1.5-2L17 13h4l-.5 2.5 1.5 2v.5zm0 0v3"
      />
    </svg>
  );
};
export default FolderPin;

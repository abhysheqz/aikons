import React from "react";
const FolderVideo: React.FC<
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
        d="M8 6.994h4.018m0 0H22v5.003m-9.982-5.003L9 3H2v18h7"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19 18.5v-1m0 1V21h-6v-6h6v2.5m0 1 2.5 1.5h.5v-4h-.5L19 17.5"
      />
    </svg>
  );
};
export default FolderVideo;

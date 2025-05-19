import React from "react";
const FolderAudio: React.FC<
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
        d="M8 6.994h4.018m0 0H22v3.003m-9.982-3.003L9 3H2v18h10"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M22 21v-8h-.5l-3 2H15v4h3.5l3 2z"
      />
    </svg>
  );
};
export default FolderAudio;

import React from "react";
const PencilEdit_02: React.FC<
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
        d="M18.53 2.47a.75.75 0 0 0-1.06 0L15.5 4.44l4.06 4.06 1.97-1.97a.75.75 0 0 0 0-1.06zm-.03 7.09L14.44 5.5l-5.97 5.97a.75.75 0 0 0-.198.348l-1 4a.75.75 0 0 0 .91.91l4-1a.75.75 0 0 0 .348-.198z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.25 5.222c0-.537.435-.972.972-.972H11v1.944H4.194v13.612h13.612V13h1.944v7.778a.97.97 0 0 1-.972.972H3.222a.97.97 0 0 1-.972-.972z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PencilEdit_02;

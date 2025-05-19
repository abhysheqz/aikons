import React from "react";
const ComputerSettings: React.FC<
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
        d="M10.5 15.75h3v3.5a.5.5 0 0 0 .5.5h3v2H7v-2h3a.5.5 0 0 0 .5-.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.75 2.25H1.25v15.5h21.5zM13 7.17V5.5h-2v1.67a3 3 0 0 0-.94.541l-1.42-.829L7.632 8.61l1.42.828a3 3 0 0 0 0 1.124l-1.42.828 1.008 1.728 1.42-.83a3 3 0 0 0 .94.541V14.5h2v-1.67a3 3 0 0 0 .94-.541l1.42.829 1.008-1.728-1.42-.828a3 3 0 0 0 0-1.124l1.42-.828-1.008-1.728-1.42.83A3 3 0 0 0 13 7.17m-1.865 2.327a1 1 0 1 1 1.728 1.005 1 1 0 0 1-1.728-1.005"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ComputerSettings;

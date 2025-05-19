import React from "react";
const BubbleChatTranslate: React.FC<
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
        d="M12 1.25C6.1 1.25 1.25 5.804 1.25 11.5c0 2.719 1.11 5.186 2.911 7.014L3.25 22.75l4.767-1.727c1.233.47 2.578.727 3.983.727 5.9 0 10.75-4.554 10.75-10.25S17.9 1.25 12 1.25M8 7.491h3.25V6.5h1.5v.991H16v1.5h-.875c-.478 1.411-1.26 2.732-2.14 3.912l1.273 1.339-1.087 1.033-1.132-1.19a31 31 0 0 1-2.385 2.464L8.632 15.45a29 29 0 0 0 2.401-2.5 22 22 0 0 1-.572-.766c-.3-.42-.595-.87-.742-1.19l1.362-.627c.082.178.3.525.601.947q.148.207.304.414c.624-.871 1.162-1.792 1.54-2.738H8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BubbleChatTranslate;

import React from "react";
const PenTool_01: React.FC<
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
        d="M11.75 2.955a8.795 8.795 0 1 0 0 17.59 8.795 8.795 0 0 0 0-17.59M1 11.75C1 5.813 5.813 1 11.75 1S22.5 5.813 22.5 11.75 17.687 22.5 11.75 22.5 1 17.687 1 11.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.971 19.544a.75.75 0 0 1-.271.806c-.27.157-1.103.644-1.609.846-1.013.405-2.482.804-4.341.804s-3.328-.399-4.341-.804c-.506-.202-1.339-.689-1.609-.846a.75.75 0 0 1-.271-.806l1.793-6.275A1.75 1.75 0 0 1 9.004 12h5.492a1.75 1.75 0 0 1 1.682 1.27zM12.892 6.756a1.241 1.241 0 0 0-2.285 0l-1.74 3.994h5.765z"
      />
    </svg>
  );
};
export default PenTool_01;

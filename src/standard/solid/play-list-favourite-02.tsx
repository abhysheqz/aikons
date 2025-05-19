import React from "react";
const PlayListFavourite_02: React.FC<
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
        d="M4.126 3.125a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h7a1 1 0 1 1 0 2h-7a3 3 0 0 1-3-3v-15a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v7a1 1 0 1 1-2 0v-7a1 1 0 0 0-1-1z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.876 9.866c0-1.35 1.465-2.192 2.632-1.512l3.015 1.76a1.75 1.75 0 0 1 0 3.022l-3.015 1.76c-1.167.68-2.632-.162-2.632-1.512zM18.125 14.86a3 3 0 0 0-.484-.252c-.653-.273-1.576-.396-2.606.142-1.332.694-1.932 2.32-1.541 3.919.399 1.634 1.794 3.221 4.375 4.16a.75.75 0 0 0 .513 0c2.58-.939 3.975-2.526 4.374-4.16.39-1.599-.209-3.225-1.541-3.92-1.03-.537-1.953-.414-2.606-.142a3 3 0 0 0-.484.252"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PlayListFavourite_02;

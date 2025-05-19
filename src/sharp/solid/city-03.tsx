import React from "react";
const City_03: React.FC<
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
        d="M2.75 16.596V22h1.5v-5.404c.368-.157.678-.421.91-.732.378-.504.59-1.165.59-1.864s-.212-1.36-.59-1.864c-.377-.504-.957-.886-1.66-.886s-1.283.382-1.66.886c-.378.504-.59 1.165-.59 1.864s.212 1.36.59 1.864c.232.31.542.575.91.732"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20 22.75H2v-2h18z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m17.5 9.296.75.5V2a.75.75 0 0 0-.75-.75h-10a.75.75 0 0 0-.75.75v20c0 .414.336.75.75.75h3.25l-.002-8.954zm-7-2.546h4v-1.5h-4zm0 3h4v-1.5h-4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m22.749 14.599-5.25-3.5-5.251 3.5.001 8.151h10.5zM18.25 22v-4h-1.5v4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default City_03;

import React from "react";
const RealEstate_02: React.FC<
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
        d="M1 21.25h22v1.5H1z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.25 7.25h4.5v15.5H21a.75.75 0 0 0 .75-.75v-7.25H20v-1.5h1.75v-1.5H20v-1.5h1.75v-1.5H20v-1.5h1.75V4.48l-8.487-3.182A.75.75 0 0 0 12.25 2z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 8.25a.75.75 0 0 0-.75.75v13c0 .414.336.75.75.75h7a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75zm2 5.5h3v-1.5h-3zm0 3h3v-1.5h-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.75 16.596V22h1.5v-5.404c.368-.157.678-.421.91-.732.378-.504.59-1.165.59-1.864s-.212-1.36-.59-1.864c-.377-.504-.957-.886-1.66-.886s-1.283.382-1.66.886c-.378.504-.59 1.165-.59 1.864s.212 1.36.59 1.864c.232.31.542.575.91.732"
      />
    </svg>
  );
};
export default RealEstate_02;

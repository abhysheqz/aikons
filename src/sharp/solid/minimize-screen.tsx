import React from "react";
const MinimizeScreen: React.FC<
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
        d="M1.25 2.227c0-.54.438-.977.977-.977h3.907v1.955h-2.93v2.931H1.25zm6.837-.977h1.953v1.955H8.087zM1.25 14.932V9.068h1.955v5.864zm21.486-.978v1.955h-1.954v-1.955zM3.205 20.796v-2.931H1.25v3.909a.977.977 0 0 0 .977.977h3.907v-1.955zm17.577 0v-2.931h1.954v3.909a.977.977 0 0 1-.977.977h-3.906v-1.955zm-5.86 1.955H9.064v-1.954h5.86zM11.982 1.29h9.779c.545 0 .987.441.987.987v9.684H11.982zm1.955 1.954v6.762h6.856V3.244z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m9.001 13.538 3.25-3.267 1.386 1.378-3.262 3.28h1.118v1.955H7.047v-4.4H9z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MinimizeScreen;

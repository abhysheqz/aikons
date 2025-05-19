import React from "react";
const AiFile: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18.988 11.004.013-7A2 2 0 0 0 17 2h-6.996L3.004 8.987v11.015a2 2 0 0 0 2 2h5.986"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 9.002h5a2 2 0 0 0 2-2v-5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.407 21.598a.638.638 0 0 0 1.186 0l.037-.093a5.1 5.1 0 0 1 2.873-2.873l.093-.037a.638.638 0 0 0 0-1.186l-.093-.037A5.1 5.1 0 0 1 17.63 14.5l-.037-.093a.638.638 0 0 0-1.186 0l-.037.093a5.1 5.1 0 0 1-2.873 2.873l-.093.037a.638.638 0 0 0 0 1.186l.093.037a5.1 5.1 0 0 1 2.873 2.873z"
      />
    </svg>
  );
};
export default AiFile;

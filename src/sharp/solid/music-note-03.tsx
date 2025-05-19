import React from "react";
const MusicNote_03: React.FC<
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
        d="M2.25 18.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0M14.25 16a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      />
      <path
        fill="currentColor"
        d="M21.75 2a.74.74 0 0 0-.306-.596.8.8 0 0 0-.68-.128l-11.44 3A.755.755 0 0 0 8.75 5v13.5h2v-7.704l9-2.455V16h2z"
      />
    </svg>
  );
};
export default MusicNote_03;

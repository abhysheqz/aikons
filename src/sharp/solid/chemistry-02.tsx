import React from "react";
const Chemistry_02: React.FC<
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
        d="M22 9.5h-6.5v-2H22zm-10.5 0H2v-2h9.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 20.5v-18h2v17h16v2H5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.997 4.5H17v-2h-7v2h1.004v3.833L7.321 16.18A.75.75 0 0 0 8 17.25h11a.75.75 0 0 0 .68-1.069l-3.683-7.848z"
      />
    </svg>
  );
};
export default Chemistry_02;

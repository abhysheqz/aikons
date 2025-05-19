import React from "react";
const Background: React.FC<
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
        d="M10.19 1.75H4.5A2.75 2.75 0 0 0 1.75 4.5v5.69zM1.75 12.31v3.38L15.69 1.75h-3.38zM17.81 1.75 1.75 17.81v1.69c0 .487.127.944.348 1.34L20.841 2.099A2.74 2.74 0 0 0 19.5 1.75zm4.092 1.41L3.159 21.901c.397.221.854.348 1.341.348h1.69L22.25 6.19V4.5c0-.487-.127-.944-.349-1.34m.348 5.15L8.31 22.25h3.38l10.56-10.56zm0 5.5-8.44 8.44h5.69a2.75 2.75 0 0 0 2.75-2.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Background;

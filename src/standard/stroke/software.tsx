import React from "react";
const Software: React.FC<
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
        stroke="#8F58F6"
        strokeLinecap="round"
        strokeOpacity={0.6}
        strokeWidth={1.5}
        d="M18.245 15a8 8 0 1 0-12.49 0M11 18h2m2.89-11.39 2.012-2.01M10 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm-7 8.5c0-1.404 0-2.107.303-2.611.132-.218.3-.406.497-.552C4.254 15 4.886 15 6.15 15h11.7c1.264 0 1.896 0 2.35.337.197.146.365.334.497.552.303.504.303 1.207.303 2.611s0 2.107-.303 2.611c-.132.218-.3.406-.497.552-.454.337-1.086.337-2.35.337H6.15c-1.264 0-1.896 0-2.35-.337a1.9 1.9 0 0 1-.497-.552C3 20.607 3 19.904 3 18.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0M19 15H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2M11 18h2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.245 15a8 8 0 1 0-12.49 0M17.5 5 16 6.5"
      />
    </svg>
  );
};
export default Software;

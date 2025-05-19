import React from "react";
const PointingRight_01: React.FC<
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
        d="M4.53 20.479c.48.228 1.058.505 1.457.696.777.372 1.943.823 3.12.999 1.14.17 2.518.115 3.46-.82 2.047-2.035 2.622-4.74 2.685-6.604h4.998a2.5 2.5 0 0 0 0-5h-8.374l.993-.946.022-.024a2.4 2.4 0 0 0-.337-3.503 2.53 2.53 0 0 0-3.1.006l-5.71 4.319H1.25v10.54h2.576z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m19.543 1.75 3.207 3.207-3.207 3.207-1.414-1.414.793-.793h-3.586v-2h3.586l-.793-.793z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PointingRight_01;

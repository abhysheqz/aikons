import React from "react";
const Soundcloud: React.FC<
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
        d="M8 6v13M5 9.88v9.028M2 11.63v5.527M17.478 10.6h.022c2.485 0 4.5 1.88 4.5 4.2S19.985 19 17.5 19H14m3.478-8.4a5 5 0 0 0 .022-.467C17.5 7.298 15.038 5 12 5h-1v14m6.478-8.4a4.93 4.93 0 0 1-1.235 2.8"
      />
    </svg>
  );
};
export default Soundcloud;

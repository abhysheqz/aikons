import React from "react";
const EllipseSelection: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 6V2l4 .003V6zM2 14v-4l4 .003V14zM18 14v-4l4 .003V14zM10 22v-4l4 .003V22zM14 4.252A8.01 8.01 0 0 1 19.748 10M10 4.252A8.01 8.01 0 0 0 4.252 10m0 4A8.01 8.01 0 0 0 10 19.748m4 0A8.01 8.01 0 0 0 19.748 14"
      />
    </svg>
  );
};
export default EllipseSelection;

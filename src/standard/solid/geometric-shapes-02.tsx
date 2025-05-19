import React from "react";
const GeometricShapes_02: React.FC<
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
        d="M1.25 6a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0m10 13.932v.568c0 .966.784 1.75 1.75 1.75h7a1.75 1.75 0 0 0 1.75-1.75v-7A1.75 1.75 0 0 0 20 11.75h-.568zM20.793 5.25h-8.587q.044.369.044.75a6.25 6.25 0 0 1-7 6.206v8.587c0 1.114 1.346 1.671 2.134.884L21.677 7.384c.787-.788.23-2.134-.884-2.134"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GeometricShapes_02;

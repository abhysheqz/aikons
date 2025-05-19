import React from "react";
const FilePound: React.FC<
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
        strokeWidth={1.5}
        d="M20 15.569a1.89 1.89 0 0 0-2.407-1.494c-1.355.359-1.969 2.18-1.355 3.317C16.875 18.572 17.5 20 16 22h5m-7-3.81h5M10 2v7H3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19.968 10.982V2.01a.01.01 0 0 0-.01-.01H9.957L3 8.985v13.001q0 .01.01.01h9.97"
      />
    </svg>
  );
};
export default FilePound;

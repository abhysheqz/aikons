import React from "react";
const AlbumNotFound_01: React.FC<
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
        d="M21.336 22.75 1.25 2.664 2.664 1.25 22.75 21.336zM19.813 7.19h-1.699V5.25h2.67a.97.97 0 0 1 .97.97v11.998l-1.942-1.941z"
      />
      <path
        fill="currentColor"
        d="M20.783 21.75H6.224a.97.97 0 0 1-.97-.97v-2.67h1.94v1.699H19.81l1.658 1.658a.97.97 0 0 1-.684.283"
      />
      <path
        fill="currentColor"
        d="M2.252 3.22V17.78c0 .536.435.97.97.97h14.56c.267 0 .509-.107.684-.282l-7.63-7.63-6.634 5.971h-.009V4.193L2.535 2.535a.97.97 0 0 0-.283.685M18.752 3.22a.97.97 0 0 0-.97-.97H5.784l1.941 1.94h9.085v6.56l-2.784-2.784-1.33 1.196 6.055 6.054z"
      />
    </svg>
  );
};
export default AlbumNotFound_01;

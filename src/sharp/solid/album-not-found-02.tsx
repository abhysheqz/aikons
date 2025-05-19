import React from "react";
const AlbumNotFound_02: React.FC<
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
        d="M21.336 22.75 1.25 2.664 2.664 1.25 22.75 21.336zM19.815 7.19h-1.699V5.25h2.67a.97.97 0 0 1 .97.97v11.998l-1.941-1.941z"
      />
      <path
        fill="currentColor"
        d="M20.785 21.75H6.226a.97.97 0 0 1-.97-.97v-2.67h1.941v1.699h12.618l1.655 1.658a.97.97 0 0 1-.685.283"
      />
      <path
        fill="currentColor"
        d="M2.254 3.22v14.56c0 .535.435.97.97.97h14.56c.267 0 .51-.108.685-.284L16.81 16.81h-.445c-.747-1.732-2.058-3.25-3.78-4.392-2.194-1.455-4.93-2.215-7.72-2.165q-.335 0-.67.014V4.19L2.536 2.535a.97.97 0 0 0-.283.685M18.754 3.22a.97.97 0 0 0-.97-.97H5.786L7.73 4.19h9.084v9.085l1.941 1.941z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 6h2v2h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AlbumNotFound_02;

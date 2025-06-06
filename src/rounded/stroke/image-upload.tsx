import React from "react";
const ImageUpload: React.FC<
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
        d="m3 16 4.47-4.47a1.81 1.81 0 0 1 2.56 0L14 15.5m1.5 1.5L14 15.5m7 .5-2.47-2.47a1.81 1.81 0 0 0-2.56 0L14 15.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 2.5c-4.23 0-6.345 0-7.747 1.198q-.3.256-.555.555C2.5 5.655 2.5 7.77 2.5 12s0 6.345 1.198 7.747q.256.3.555.555C5.655 21.5 7.77 21.5 12 21.5s6.345 0 7.747-1.198q.3-.256.555-.555C21.5 18.345 21.5 16.23 21.5 12M15.5 5.5c.59-.607 2.16-3 3-3s2.41 2.393 3 3m-3-2.5v6.5"
      />
    </svg>
  );
};
export default ImageUpload;

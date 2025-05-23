import React from "react";
const FileSecurity: React.FC<
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
        d="M20 12V9l-7-7H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 2v5a2 2 0 0 0 2 2h5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M20 17.622V15.65a.634.634 0 0 0-.523-.62 9.1 9.1 0 0 1-2.66-.949.66.66 0 0 0-.634 0 9.1 9.1 0 0 1-2.66.949.634.634 0 0 0-.523.62v1.97c0 2.572 2.542 3.975 3.294 4.333.132.063.28.063.412 0 .752-.358 3.294-1.76 3.294-4.332Z"
      />
    </svg>
  );
};
export default FileSecurity;

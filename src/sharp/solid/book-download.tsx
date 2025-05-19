import React from "react";
const BookDownload: React.FC<
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
        d="M6.5 1.25A3.75 3.75 0 0 0 2.75 5l-.004 14c0 2.07 1.766 3.75 3.944 3.75h14.557v-1.875h-1.736v-3.75h1.736L21.25 1.25zm.19 15.875H17.54v3.75H6.691c-1.09 0-1.972-.84-1.972-1.875v-.001c0-1.035.883-1.874 1.972-1.874m6.059-6.798V5h-1.5v5.327l-1.751-1.56-.998 1.12 3.499 3.118 3.499-3.119-.998-1.12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BookDownload;

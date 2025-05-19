import React from "react";
const BookUpload: React.FC<
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
        d="M6 19a1 1 0 1 0 0 2h14a1 1 0 1 1 0 2H6a3 3 0 1 1 0-6h14a1 1 0 1 1 0 2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.332 17.445a1 1 0 0 1-.277 1.387c-.296.198-.555.618-.555 1.168s.259.97.555 1.168a1 1 0 0 1-1.11 1.664c-.9-.6-1.445-1.672-1.445-2.832s.546-2.231 1.445-2.832a1 1 0 0 1 1.387.277"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 1a3 3 0 0 0-3 3v16a1 1 0 1 0 2 0 1 1 0 0 1 1-1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7 12.5a1 1 0 1 1-2 0v-3H9.5a1 1 0 0 1-.707-1.707l2.5-2.5a1 1 0 0 1 1.414 0l2.5 2.5A1 1 0 0 1 14.5 10.5H13z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BookUpload;

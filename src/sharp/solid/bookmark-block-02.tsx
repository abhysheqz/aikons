import React from "react";
const BookmarkBlock_02: React.FC<
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
        d="M12.25 6.25a5 5 0 1 1 10 0 5 5 0 0 1-10 0m2.292-1.293a3 3 0 0 0 4.001 4.001zm1.415-1.415 4 4.001a3 3 0 0 0-4.001-4.001"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.096 1.25a6.5 6.5 0 0 0 6.154 11.187V22.75l-8.75-4.375-8.75 4.375V2a.75.75 0 0 1 .75-.75z"
      />
    </svg>
  );
};
export default BookmarkBlock_02;

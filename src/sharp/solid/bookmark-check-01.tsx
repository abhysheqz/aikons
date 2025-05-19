import React from "react";
const BookmarkCheck_01: React.FC<
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
        d="M3.47 1.47A.75.75 0 0 1 4 1.25h16a.75.75 0 0 1 .75.75v4.25H3.25V2a.75.75 0 0 1 .22-.53"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.25 7.75h17.5v15L12 18.375 3.25 22.75zm8.325 8.302 3.989-4.558-1.129-.988-3.011 3.441-.936-.802-.977 1.139z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BookmarkCheck_01;

import React from "react";
const BookOpen_01: React.FC<
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
        d="M2.217 2.282A.75.75 0 0 0 1.25 3v15.75l10 3V5.007zM12.75 5.007V21.75l10-3V3a.75.75 0 0 0-.967-.718z"
      />
    </svg>
  );
};
export default BookOpen_01;

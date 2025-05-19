import React from "react";
const PlayListRemove: React.FC<
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
        d="M13.793 13.793a1 1 0 0 1 1.414 0L18 16.586l2.793-2.793a1 1 0 0 1 1.414 1.414L19.414 18l2.793 2.793a1 1 0 0 1-1.414 1.414L18 19.414l-2.793 2.793a1 1 0 0 1-1.414-1.414L16.586 18l-2.793-2.793a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.5 8h21v4.208a2.5 2.5 0 0 0-2.768.524L18 14.465l-1.732-1.733a2.5 2.5 0 0 0-3.536 3.536L14.465 18l-1.733 1.732a2.5 2.5 0 0 0-.524 2.768H4.5a3 3 0 0 1-3-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.97 1.5 6.507 6H1.5V4.5a3 3 0 0 1 3-3zM19.493 1.5 16.03 6h6.47V4.5a3 3 0 0 0-3-3zM12.493 1.5 9.03 6h4.477l3.461-4.5z"
      />
    </svg>
  );
};
export default PlayListRemove;

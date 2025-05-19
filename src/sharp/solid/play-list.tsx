import React from "react";
const PlayList: React.FC<
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
        d="M3 2.25h5.733l-2.18 4H2.25V3A.75.75 0 0 1 3 2.25M13.553 6.25H8.261l2.18-4h5.292zM17.441 2.25l-2.18 4h6.489V3a.75.75 0 0 0-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.75 7.75H2.25V21c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75zM15.5 14.5 10 11v7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PlayList;

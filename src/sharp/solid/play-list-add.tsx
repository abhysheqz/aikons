import React from "react";
const PlayListAdd: React.FC<
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
        d="M8.233 1.75H2.5a.75.75 0 0 0-.75.75v3.25h4.303zM7.761 5.75h5.292l2.18-4H9.941zM16.941 1.75l-2.18 4h6.489V2.5a.75.75 0 0 0-.75-.75zM1.75 7.25h19.5v5.5h-5.5v3h-3v5.5H2.5a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.25 19.25v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PlayListAdd;

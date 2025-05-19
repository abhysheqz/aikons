import React from "react";
const Bookmark_01: React.FC<
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
        d="M6.75 2A2.75 2.75 0 0 0 4 4.75V7h16.5V4.75A2.75 2.75 0 0 0 17.75 2zM20.5 8.5H4v13.25a.75.75 0 0 0 1.103.662L12.25 18.6l7.147 3.812a.75.75 0 0 0 1.103-.662z"
      />
    </svg>
  );
};
export default Bookmark_01;

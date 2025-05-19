import React from "react";
const Bookmark_03: React.FC<
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
        d="M21 1.25H3c-.552 0-1 .438-1 .978v19.545c0 .54.448.977 1 .977h18c.552 0 1-.437 1-.977V2.227a.97.97 0 0 0-.293-.69A1 1 0 0 0 21 1.25m-9 6.812-3.25 2.437V3.204h6.5V10.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bookmark_03;

import React from "react";
const Backpack_03: React.FC<
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
        d="M20.673 20.762q.076-.37.077-.762v-6h.75a1 1 0 0 1 1 1v2.584c0 .38 0 .708-.058 1.001a3 3 0 0 1-1.77 2.177M3.327 20.761a3 3 0 0 1-1.77-2.176c-.058-.293-.057-.62-.057-1.001V15a1 1 0 0 1 1-1h.75v6q.001.392.077.761"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.75 13.691A4.75 4.75 0 0 0 19.752 9V7a2.75 2.75 0 0 0-2.75-2.75H7A2.75 2.75 0 0 0 4.25 7v2a4.75 4.75 0 0 0 4 4.691V15a.75.75 0 0 0 1.5 0v-1.25h4.5V15a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.75 12.244a5.76 5.76 0 0 1-3 2.235V15a1.75 1.75 0 1 1-3.5 0v-.25h-2.5V15a1.75 1.75 0 1 1-3.5 0v-.521a5.76 5.76 0 0 1-3-2.237V20A2.75 2.75 0 0 0 7 22.75h10A2.75 2.75 0 0 0 19.75 20z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2.75A2.25 2.25 0 0 0 9.75 5a.75.75 0 0 1-1.5 0 3.75 3.75 0 1 1 7.5 0 .75.75 0 0 1-1.5 0A2.25 2.25 0 0 0 12 2.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Backpack_03;

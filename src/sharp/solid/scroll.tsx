import React from "react";
const Scroll: React.FC<
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
        d="M21.75 20A2.75 2.75 0 0 1 19 22.75H5A2.75 2.75 0 0 1 2.25 20v-2.75h4v-16h15.5zm-5.2 1.25c-.192-.375-.3-.8-.3-1.25v-1.25H3.75V20c0 .69.56 1.25 1.25 1.25zm1.2-16h-7.5v1.5h7.5zm-7.5 4h7.5v1.5h-7.5zm4.5 4h-4.5v1.5h4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Scroll;

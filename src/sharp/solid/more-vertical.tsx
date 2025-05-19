import React from "react";
const MoreVertical: React.FC<
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
        d="M13.5 10.496v3.008h-3v-3.008zM13.5 16.504v3.01h-3v-3.01zM13.5 4.487v3.009h-3v-3.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoreVertical;

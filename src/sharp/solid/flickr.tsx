import React from "react";
const Flickr: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m9.25 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m5.5 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Flickr;

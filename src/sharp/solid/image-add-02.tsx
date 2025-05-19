import React from "react";
const ImageAdd_02: React.FC<
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
        d="M1.75 1.75H15.5V4H12v4.5h3.5V12H20V8.5h2.25v13.75H1.75zm7.248 8.254 5.25 5.25L17 12.502l3.298 2.931v4.865H3.702V15.3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.75 1.75v3.5h3.5v2h-3.5v3.5h-2v-3.5h-3.5v-2h3.5v-3.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageAdd_02;

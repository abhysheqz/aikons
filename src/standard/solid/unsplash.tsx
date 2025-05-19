import React from "react";
const Unsplash: React.FC<
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
        d="M9.5 3.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h5a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75zm-5 6.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75V11a.75.75 0 0 0-.75-.75H16a.75.75 0 0 0-.75.75v4.25h-6.5V11a.75.75 0 0 0-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Unsplash;

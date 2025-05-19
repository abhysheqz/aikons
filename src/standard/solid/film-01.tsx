import React from "react";
const Film_01: React.FC<
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
        d="M4.5 1.5a3 3 0 0 0-3 3v15a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-15a3 3 0 0 0-3-3zM13 8h7.5v8H13zm-2 8H3.5V8H11zM9 3.5v3H7v-3zm8 0v3h-2v-3zm-8 17v-3H7v3zm8 0v-3h-2v3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Film_01;

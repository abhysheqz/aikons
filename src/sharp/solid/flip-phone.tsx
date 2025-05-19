import React from "react";
const FlipPhone: React.FC<
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
        d="M6.75 3.75v-2h-2V15a7.25 7.25 0 1 0 14.5 0V4.5a.75.75 0 0 0-.75-.75zM16 7H8v5h8zm-5.5 9.75v1.5h3v-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FlipPhone;

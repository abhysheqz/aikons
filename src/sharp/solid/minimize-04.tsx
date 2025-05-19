import React from "react";
const Minimize_04: React.FC<
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
        d="M13.18 2.768a1.187 1.187 0 0 0-1.372.971L9.971 14.185l-.295 1.57L7.08 13.06a1.348 1.348 0 0 0-2.027.117 1.43 1.43 0 0 0-.026 1.728l.014.018 4.117 7.19 11.66.138 1.412-9.125a1.2 1.2 0 0 0-.963-1.39 1.187 1.187 0 0 0-1.372.97l-.091.522-.79-.133.276-1.566a1.2 1.2 0 0 0-.963-1.39 1.187 1.187 0 0 0-1.372.97l-.092.523-.79-.133.276-1.566a1.2 1.2 0 0 0-.963-1.39 1.187 1.187 0 0 0-1.372.97l-.275 1.566-.79-.132 1.194-6.787a1.2 1.2 0 0 0-.963-1.391"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m8.03 3.47 1.72-1.72 1.06 1.06-1.719 1.72h1.19v1.5H6.53V2.28h1.5zM3.47 8.03H2.28v-1.5h3.75v3.75h-1.5V9.091l-1.72 1.72L1.75 9.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Minimize_04;

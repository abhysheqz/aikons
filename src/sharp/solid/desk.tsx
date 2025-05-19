import React from "react";
const Desk: React.FC<
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
        d="M4 22.75v-6h2v6zm14 0v-6h2v6zM7 20.75v-4h2v4zm8 0v-4h2v4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M23 8.75H1v2h1.25v6c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75v-6H23zM7 1.25a.75.75 0 0 0-.75.75v5.25h11.5V2a.75.75 0 0 0-.75-.75z"
      />
    </svg>
  );
};
export default Desk;

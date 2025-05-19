import React from "react";
const Mirror: React.FC<
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
        d="M12 1.75A5.75 5.75 0 0 0 6.25 7.5v10.75h11.5V7.5A5.75 5.75 0 0 0 12 1.75m-1.97 6.78 2-2-1.061-1.06-2 2zm.5 3 4-4-1.061-1.06-4 4zM3 22.25v-14h2v14zm16 0v-14h2v14z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20 21.25H4v-2h16zM7 13.5H4v-2h3zm13 0h-3v-2h3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mirror;

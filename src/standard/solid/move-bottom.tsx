import React from "react";
const MoveBottom: React.FC<
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
        d="M12.008 8.75a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5M12 11.227a1 1 0 0 1 1 1v6.285h2.594c.292 0 .61.126.637.416a.75.75 0 0 1-.259.641l-3.5 3a.75.75 0 0 1-.976 0l-3.5-3a.75.75 0 0 1-.258-.64c.027-.291.345-.417.637-.417H11v-6.285a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoveBottom;

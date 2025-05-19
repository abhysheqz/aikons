import React from "react";
const MailLove_01: React.FC<
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
        d="M3.932 2A2.93 2.93 0 0 0 1 4.932v11.73a2.93 2.93 0 0 0 2.932 2.932h6.07a.977.977 0 0 0 0-1.955h-6.07a.977.977 0 0 1-.977-.977V7.217l7.595 3.797a2.69 2.69 0 0 0 2.404 0l7.595-3.797v1.897a.977.977 0 1 0 1.954 0V4.932A2.93 2.93 0 0 0 19.572 2zm12.742 10.306c.225.095.418.205.577.31.16-.105.353-.215.577-.31.716-.303 1.728-.44 2.86.16 1.454.769 2.111 2.571 1.683 4.353-.438 1.82-1.974 3.614-4.86 4.681a.75.75 0 0 1-.52 0c-2.885-1.067-4.422-2.86-4.86-4.681-.428-1.782.23-3.584 1.683-4.354 1.133-.6 2.145-.462 2.86-.159"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailLove_01;

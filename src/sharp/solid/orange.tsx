import React from "react";
const Orange: React.FC<
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
        d="M4.959 1.25h1.04c3.095 0 4.751.729 5.647 1.842q.103.128.19.257.048-.103.104-.205C12.483 2.138 13.453 1.25 15 1.25v1.5c-.853 0-1.383.446-1.74 1.106-.24.445-.382.96-.453 1.427 4.695.386 8.443 4.104 8.443 8.717 0 4.875-4.185 8.75-9.25 8.75S2.75 18.875 2.75 14c0-3.591 2.271-6.64 5.492-7.996a5.3 5.3 0 0 1-1.536-1.112c-.87-.914-1.198-1.959-1.366-2.491q-.029-.093-.052-.164z"
      />
    </svg>
  );
};
export default Orange;

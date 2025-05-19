import React from "react";
const CameraMicrophone_02: React.FC<
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M22.064 21.91V6.11a.1.1 0 0 0-.1-.1h-4.902l-1.988-3.946a.1.1 0 0 0-.09-.055H9.1a.1.1 0 0 0-.09.055L7.06 6.01h-4.9a.1.1 0 0 0-.1.1v15.8a.1.1 0 0 0 .1.1h19.805a.1.1 0 0 0 .1-.1Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.51 14.509c.598 1.7 1.914 2.492 3.488 2.492m0 0v2.017m0-2.017c1.574 0 2.935-.805 3.502-2.492m-3.495-.029a1.75 1.75 0 0 1-1.751-1.75v-1.971a1.751 1.751 0 1 1 3.502 0v1.97c0 .968-.784 1.752-1.751 1.752Z"
      />
    </svg>
  );
};
export default CameraMicrophone_02;

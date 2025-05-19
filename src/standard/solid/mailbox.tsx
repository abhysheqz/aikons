import React from "react";
const Mailbox: React.FC<
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
        d="M6.707 7a5.502 5.502 0 0 1 10.586 0zM4.65 7a7.503 7.503 0 0 1 14.7 0H20a1 1 0 1 1 0 2h-.5v9h.5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h.5V9H4a1 1 0 0 1 0-2zM5 20h14v1H5zm5.5-10a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mailbox;

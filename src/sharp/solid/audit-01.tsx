import React from "react";
const Audit_01: React.FC<
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
        d="M14.483 18.51a7 7 0 0 0-.325-1.614l-.072-.23c-.157-.493-.336-1.054-.336-1.666a2.75 2.75 0 1 1 5.5 0c0 .612-.179 1.173-.336 1.665q-.038.118-.072.23a7 7 0 0 0-.325 1.616l3.233.923v3.316h-10.5v-3.316zM15.25 15a1.25 1.25 0 1 1 2.5 0c0 .363-.1.679-.258 1.185l-.084.269a8.5 8.5 0 0 0-.374 1.796h-1.068a8.5 8.5 0 0 0-.374-1.796l-.084-.27c-.159-.505-.258-.822-.258-1.184"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.25 1.25h17.5v11.011A4.25 4.25 0 0 0 12.25 15c0 .848.24 1.6.39 2.07.032.105.08.26.112.375l-3.002.858v4.447h-7.5zM7 7.75h8v-1.5H7zm0 4h4v-1.5H7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Audit_01;

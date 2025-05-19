import React from "react";
const AttachmentSquare: React.FC<
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
        d="M4.75 2A2.75 2.75 0 0 0 2 4.75v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15A2.75 2.75 0 0 0 19.75 2zm3.741 6.491a1.676 1.676 0 0 1 2.37 0l5.148 5.147a1.676 1.676 0 1 1-2.37 2.371l-1.931-1.93c-.222-.222-.262-.408-.257-.53a.57.57 0 0 1 .195-.39.67.67 0 0 1 .46-.18c.16.002.376.064.614.301l1 1a.75.75 0 1 0 1.06-1.06l-1-1c-1.02-1.022-2.35-.899-3.147-.167a2.07 2.07 0 0 0-.68 1.435c-.025.587.211 1.168.694 1.652l1.93 1.93a3.177 3.177 0 0 0 4.493-4.492L11.922 7.43a3.176 3.176 0 0 0-4.492 4.493l.858.857a.75.75 0 0 0 1.06-1.06l-.857-.858a1.676 1.676 0 0 1 0-2.371"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AttachmentSquare;

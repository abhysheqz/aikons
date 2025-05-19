import React from "react";
const AiVoice: React.FC<
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
        d="M16.16 2.25H1.25v20.5h20.5V7.84l-.7.21-.89 2.95h-3.32l-.89-2.95L13 7.16V3.84l2.95-.89zm-6.41 9v4.5h-1.5v-4.5zm3 7.5V8.25h-1.5v10.5zm3-8.5v6.5h-1.5v-6.5zm-9 4.5v-2.5h-1.5v2.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.768 1.25h1.464l.815 2.703 2.703.815v1.464l-2.703.815-.815 2.703h-1.464l-.815-2.703-2.703-.815V4.768l2.703-.815z"
      />
    </svg>
  );
};
export default AiVoice;

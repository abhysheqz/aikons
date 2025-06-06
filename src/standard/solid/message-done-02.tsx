import React from "react";
const MessageDone_02: React.FC<
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
        d="M17.239 2.908a9 9 0 0 0-3.269-.85 34 34 0 0 0-4.44 0c-4.567.303-8.19 3.989-8.488 8.599a21 21 0 0 0 0 2.617c.11 1.716.86 3.264 1.692 4.52.25.482.12 1.204-.347 2.088l-.022.04c-.156.298-.31.588-.398.836-.094.262-.19.679.05 1.09.085.144.2.28.361.387.155.104.317.158.462.19.257.055.575.058.9.058 1.415.032 2.413-.377 3.204-.96.157-.116.265-.196.346-.252.119.044.28.11.518.208a5.6 5.6 0 0 0 1.722.394c1.457.097 2.98.097 4.44 0 4.567-.303 8.19-3.99 8.488-8.6.056-.862.056-1.754 0-2.616a9.3 9.3 0 0 0-1.464-4.445L18.17 9.6a2.5 2.5 0 0 1-3.689.167l-2-2a2.5 2.5 0 1 1 3.536-3.535l.064.064zM6.75 12.234a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H7.75a1 1 0 0 1-1-1m3.996 0a1 1 0 0 1 1-1h.008a1 1 0 1 1 0 2h-.008a1 1 0 0 1-1-1m3.995 0a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2h-.009a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.89 1.232a1 1 0 0 1 .128 1.408l-5 6a1 1 0 0 1-1.475.067l-2-2a1 1 0 0 1 1.414-1.414l1.226 1.226 4.299-5.16a1 1 0 0 1 1.408-.127"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MessageDone_02;

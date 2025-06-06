import React from "react";
const MessageDownload_02: React.FC<
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
        d="M15.75 2.621a9 9 0 0 0-1.78-.298 34 34 0 0 0-4.44 0c-4.567.303-8.19 3.99-8.488 8.6a21 21 0 0 0 0 2.616c.11 1.717.86 3.265 1.692 4.521.25.482.12 1.204-.347 2.088l-.022.04c-.156.297-.31.588-.398.835-.094.263-.19.68.05 1.092.085.142.2.278.361.386.155.104.317.158.462.189.257.055.575.058.9.058 1.415.033 2.413-.377 3.204-.96.157-.116.265-.195.346-.251.119.043.28.11.518.208a5.6 5.6 0 0 0 1.722.394c1.457.097 2.98.097 4.44 0 4.567-.304 8.19-3.99 8.488-8.6.056-.862.056-1.754 0-2.617a9.4 9.4 0 0 0-.294-1.8l-2.146 2.146a2.5 2.5 0 0 1-3.536 0l-2.5-2.5A2.5 2.5 0 0 1 15.75 4.5zm-9 9.879a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H7.75a1 1 0 0 1-1-1m3.996 0a1 1 0 0 1 1-1h.008a1 1 0 1 1 0 2h-.008a1 1 0 0 1-1-1m3.995 0a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2h-.009a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.25 1a1 1 0 0 1 1 1v4.293h1.793c.265 0 .543.097.64.344a1 1 0 0 1-.226 1.07l-2.5 2.5a1 1 0 0 1-1.414 0l-2.5-2.5a1 1 0 0 1-.225-1.07c.096-.247.374-.344.64-.344h1.792V2a1 1 0 0 1 1-1"
      />
    </svg>
  );
};
export default MessageDownload_02;

import React from "react";
const Message_01: React.FC<
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
        d="M13.97 2.073a34 34 0 0 0-4.43 0c-4.565.303-8.2 3.988-8.498 8.6a21 21 0 0 0 0 2.616c.111 1.72.838 3.206 1.69 4.519.288.542.2 1.058-.345 2.09a16 16 0 0 1-.241.437l-.026.046a4 4 0 0 0-.198.386c-.062.15-.118.35-.09.587.027.22.117.394.186.51.084.143.2.279.36.387.155.104.317.158.462.189.257.055.575.058.9.058 1.415.033 2.413-.377 3.204-.96.16-.118.27-.198.35-.254.076.029.166.066.287.117l.227.094a5.6 5.6 0 0 0 1.722.394c1.457.097 2.98.097 4.44 0 4.567-.304 8.19-3.99 8.488-8.6.056-.862.056-1.754 0-2.617-.298-4.61-3.921-8.296-8.488-8.6M8.25 9a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Message_01;

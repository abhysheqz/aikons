import React from "react";
const GoForwardSec_15: React.FC<
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
        d="M12.194 3.206 12 3.204a8.795 8.795 0 1 0 5.277 1.758L18.45 3.4A10.74 10.74 0 0 1 22.75 12c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12 6.063 1.25 12 1.25c.735 0 1.454.074 2.149.215a.977.977 0 0 1 .6 1.526l-1.954 2.736-1.59-1.136z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.998 9a1 1 0 0 0-1.6-.8l-2 1.5 1.2 1.6.4-.3v6h2zM12.623 8a1 1 0 0 0-.99.859l-.5 3.5a1 1 0 0 0 1.221 1.114l.323-.078c.591-.144 1.034-.252 1.517-.252a.928.928 0 1 1 0 1.857h-.03c-.205 0-.375 0-.538-.01a1.6 1.6 0 0 1-.366-.06.4.4 0 0 1-.072-.03q-.017-.01-.016-.011-.001 0-.01-.016a.4.4 0 0 1-.032-.094l-1.95.442c.093.411.276.772.557 1.061.277.285.6.452.904.55.523.17 1.107.17 1.477.168h.076a2.929 2.929 0 0 0 0-5.857c-.3 0-.595.028-.878.072L13.49 10h3.01V8z"
      />
    </svg>
  );
};
export default GoForwardSec_15;

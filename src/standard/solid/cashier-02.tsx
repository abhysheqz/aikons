import React from "react";
const Cashier_02: React.FC<
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
        d="M13.5 3.75c0-.966.784-1.75 1.75-1.75h3c.966 0 1.75.784 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75h-.75v2.25a.75.75 0 0 1-1.5 0V6.5h-.75a1.75 1.75 0 0 1-1.75-1.75zM18.25 5a.25.25 0 0 0 .25-.25v-1a.25.25 0 0 0-.25-.25h-3a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.165 8a2.75 2.75 0 0 0-2.593 1.835L2.1 16.839a1.8 1.8 0 0 0-.1.582v4.329c0 .414.336.75.75.75h19a.75.75 0 0 0 .75-.75v-4.329c0-.198-.034-.395-.1-.582l-2.472-7.004A2.75 2.75 0 0 0 17.335 8zm3.085 10a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zM7.5 12.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75m3.75 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75m3.75 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75M7.25 14.5a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm4.5 0a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm4.5 0a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Cashier_02;

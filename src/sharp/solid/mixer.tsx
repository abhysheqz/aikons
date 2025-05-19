import React from "react";
const Mixer: React.FC<
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
        d="M22.375 21.75h-20v-2h20z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.375 15h-7v2.516a3.49 3.49 0 0 0 3.5 3.484c1.933 0 3.5-1.56 3.5-3.484z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.875 15v-4h2v4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.375 2.25a.75.75 0 0 0-.75.75v5.5c0 .414.336.75.75.75h1.25V21c0 .414.336.75.75.75h10a.75.75 0 0 0 0-1.5 3.25 3.25 0 0 1-3.25-3.25V9.25h2.742l.812 2.028a.75.75 0 0 0 .696.472h5a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zM17.383 7a1 1 0 1 0 0-2h-.01a1 1 0 1 0 0 2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mixer;

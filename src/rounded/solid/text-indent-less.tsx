import React from "react";
const TextIndentLess: React.FC<
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
        d="M10 4.5a1 1 0 0 0-1-1H4a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1M10 9.5a1 1 0 0 0-1-1H6a1 1 0 0 0 0 2h3a1 1 0 0 0 1-1M10 14.5a1 1 0 0 0-1-1H4a1 1 0 1 0 0 2h5a1 1 0 0 0 1-1M10 19.5a1 1 0 0 0-1-1H6a1 1 0 1 0 0 2h3a1 1 0 0 0 1-1M13 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M20.779 7.873a1 1 0 0 0-1.406-.152L17.83 8.964c-.606.488-1.195.963-1.57 1.362-.4.427-.76.964-.76 1.674s.36 1.247.76 1.674c.375.4.91.83 1.517 1.32l1.596 1.285A1 1 0 0 0 21 15.5v-7a1 1 0 0 0-.221-.627"
      />
    </svg>
  );
};
export default TextIndentLess;

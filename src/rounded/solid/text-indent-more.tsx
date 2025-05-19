import React from "react";
const TextIndentMore: React.FC<
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
        d="M14 4.5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1M14 9.5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1M14 14.5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1M14 19.5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1M11 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.221 7.873a1 1 0 0 1 1.406-.152L6.17 8.964c.606.488 1.195.963 1.57 1.362.4.427.76.964.76 1.674s-.36 1.247-.76 1.674c-.375.4-.91.83-1.517 1.32l-1.596 1.285A1 1 0 0 1 3 15.5v-7c0-.22.072-.442.221-.627"
      />
    </svg>
  );
};
export default TextIndentMore;

import React from "react";
const SdCard: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M5.5 8.9V8c0-2.828 0-4.243.879-5.121C7.257 2 8.672 2 11.5 2h3c2.828 0 4.243 0 5.121.879.879.878.879 2.293.879 5.121v6c0 3.771 0 5.657-1.172 6.828S16.271 22 12.5 22h-1.875c-2.928 0-4.392 0-5.428-.73a4 4 0 0 1-.967-.966c-.73-1.037-.73-2.5-.73-5.43v-.273c0-.542 0-.813.046-1.073a3 3 0 0 1 .32-.911c.126-.232.295-.444.634-.867s.508-.635.634-.867a3 3 0 0 0 .32-.91c.046-.26.046-.532.046-1.074ZM16.5 6v3M13 6v3M9.5 6v3"
      />
    </svg>
  );
};
export default SdCard;

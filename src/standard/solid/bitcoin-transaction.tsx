import React from "react";
const BitcoinTransaction: React.FC<
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
        d="M10.783 4.047c4.61-.416 7.488 1.97 8.64 4.953 1.102 2.849.623 6.186-1.424 8.314V16a1 1 0 1 0-2 0v3.5a1 1 0 0 0 1 1h3.5a1 1 0 1 0 0-2h-.871c2.505-2.766 2.964-6.853 1.661-10.221-1.46-3.78-5.148-6.723-10.686-6.224a1 1 0 1 0 .18 1.992M3.499 3.5a1 1 0 1 0 0 2h.87c-2.512 2.762-2.963 6.832-1.652 10.193 1.467 3.761 5.149 6.702 10.656 6.264a1 1 0 0 0-.158-1.994c-4.593.365-7.476-2.024-8.635-4.997C3.473 12.126 3.944 8.81 6 6.686V7.5a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1zM13 8a1 1 0 0 0-2 0H9.5a1 1 0 0 0 0 2v4a1 1 0 1 0 0 2H11a1 1 0 1 0 2 0 2.5 2.5 0 0 0 2-4 2.5 2.5 0 0 0-2-4m-1.5 3v-1H13a.5.5 0 0 1 0 1zm0 2H13a.5.5 0 0 1 0 1h-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinTransaction;

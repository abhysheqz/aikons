import React from "react";
const Prawn: React.FC<
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
        d="M1.25 13.5c0-1.492.353-2.902.981-4.15l6.477 5.166c.03.343.158.658.354.917l-4.836 4.864A9.23 9.23 0 0 1 1.25 13.5m8.014-.459L3.02 8.06A9.24 9.24 0 0 1 9.75 4.28V8a.75.75 0 0 0 1.5 0V4.25H19a.75.75 0 0 1 .75.75c0 2.93-.976 4.871-2.5 6.055-1.488 1.156-3.38 1.495-5.05 1.495h-1.7c-.479 0-.913.187-1.236.491M5.416 21.23A9.2 9.2 0 0 0 10.5 22.75c5.163 0 9.25-4.698 9.25-9.75a.75.75 0 0 0-.75-.75c-1.216 0-2.45.551-3.371 1.366-.742.655-1.343 1.536-1.551 2.534h-3.614l-.03.031zM14 7a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.5 2a1 1 0 0 1 1-1h10.66c1.78 0 3.139 1.618 2.784 3.376-.395 1.953-2.115 3.218-3.805 3.6a1 1 0 1 1-.44-1.951c1.159-.262 2.09-1.079 2.284-2.045a.826.826 0 0 0-.822-.98H9.5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Prawn;

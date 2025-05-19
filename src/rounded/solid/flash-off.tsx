import React from "react";
const FlashOff: React.FC<
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
        d="M8.471 7.283a1 1 0 0 0-1.49.109l-2.553 3.33a2.12 2.12 0 0 0-.279 2.063c.245.621.847 1.23 1.737 1.23h3.232v6.968c0 .845.47 1.562 1.175 1.867.732.317 1.613.135 2.167-.588l4.333-5.654a1 1 0 0 0-.096-1.325z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.477 3.732a.1.1 0 0 0-.177-.063l-2.027 2.466a1 1 0 1 1-1.546-1.27l2.593-3.154c.514-.685 1.354-.885 2.07-.556.678.312 1.087 1.018 1.087 1.8v6.28c0 .11.09.2.2.2h2.54c.882 0 1.436.636 1.65 1.213a2.1 2.1 0 0 1-.289 2.002l-.804.983a1 1 0 1 1-1.548-1.265l.629-.77a.1.1 0 0 0-.078-.163h-2.519c-1.16 0-1.78-1.07-1.78-1.953z"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="m2 2 20 20"
      />
    </svg>
  );
};
export default FlashOff;

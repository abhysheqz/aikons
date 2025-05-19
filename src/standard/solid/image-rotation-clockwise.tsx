import React from "react";
const ImageRotationClockwise: React.FC<
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
        d="M5.506 7.84A2.7 2.7 0 0 0 5.25 9v10A2.75 2.75 0 0 0 8 21.75h12A2.75 2.75 0 0 0 22.75 19V9A2.75 2.75 0 0 0 20 6.25h-7.126l.067.265a2 2 0 0 1-1.391 2.408l-3.5 1A2 2 0 0 1 5.505 7.84m5.986 2.65a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0v-.01a1 1 0 0 1 1-1M17 13l-4.5 4.5L10 15l-3.25 3.25V19c0 .69.56 1.25 1.25 1.25h12c.69 0 1.25-.56 1.25-1.25v-1.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.818 2.272a.75.75 0 0 1 .91.546l1 4a.75.75 0 0 1-.522.903l-3.5 1a.75.75 0 1 1-.412-1.442l2.29-.654A4.25 4.25 0 0 0 3.6 12.55a.75.75 0 0 1-1.2.901 5.75 5.75 0 0 1 7.308-8.524l-.436-1.745a.75.75 0 0 1 .546-.91"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageRotationClockwise;

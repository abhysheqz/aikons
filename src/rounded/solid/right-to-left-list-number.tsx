import React from "react";
const RightToLeftListNumber: React.FC<
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
        d="M14 6a1 1 0 0 0-1-1H3a1 1 0 1 0 0 2h10a1 1 0 0 0 1-1M14 12a1 1 0 0 0-1-1H3a1 1 0 1 0 0 2h10a1 1 0 0 0 1-1M14 18a1 1 0 0 0-1-1H3a1 1 0 1 0 0 2h10a1 1 0 0 0 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.794 16.002A10 10 0 0 0 19.5 16H18a1 1 0 1 1 0-2h1.559c.216 0 .453 0 .67.042a2.2 2.2 0 0 1 1.729 1.729c.043.217.042.454.042.67v.118c0 .216 0 .453-.042.67a2.2 2.2 0 0 1-1.729 1.729 3.5 3.5 0 0 1-.67.042h-.06a10 10 0 0 0-.293.002l-.051.003a.2.2 0 0 0-.15.15l-.003.051A10 10 0 0 0 19 19.5v.5h2a1 1 0 0 1 0 2h-2.428c-.114 0-.283 0-.434-.02a1.3 1.3 0 0 1-.757-.36 1.3 1.3 0 0 1-.361-.757c-.02-.152-.02-.321-.02-.435v-.987c0-.216-.001-.453.042-.67a2.2 2.2 0 0 1 1.729-1.729c.217-.043.454-.042.67-.042h.059a10 10 0 0 0 .345-.005.2.2 0 0 0 .15-.15l.003-.05A10 10 0 0 0 20 16.5a10 10 0 0 0-.005-.345.2.2 0 0 0-.15-.15z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 3a1 1 0 0 1 1-1h1.2a1.3 1.3 0 0 1 1.3 1.3V8h.5a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2h.5V4H18a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RightToLeftListNumber;

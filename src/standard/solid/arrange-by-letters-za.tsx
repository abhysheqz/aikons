import React from "react";
const ArrangeByLettersZa: React.FC<
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
        d="M17.5 3a1 1 0 0 1 1 1v12.5H20a1 1 0 0 1 .707 1.707l-2.5 2.5a1 1 0 0 1-1.414 0l-2.5-2.5A1 1 0 0 1 15 16.5h1.5V4a1 1 0 0 1 1-1M3 3a1 1 0 0 1 1-1h5.4a1 1 0 0 1 .825 1.566L6.498 9H10a1 1 0 1 1 0 2H4.6a1 1 0 0 1-.825-1.566L7.502 4H4a1 1 0 0 1-1-1M7 14a1 1 0 0 1 .895.553l3 6a1 1 0 1 1-1.79.894L7 17.237l-2.105 4.21a1 1 0 1 1-1.79-.894l3-6A1 1 0 0 1 7 14"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrangeByLettersZa;

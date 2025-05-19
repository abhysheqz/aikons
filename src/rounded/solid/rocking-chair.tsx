import React from "react";
const RockingChair: React.FC<
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
        d="M11 7a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.189 7.415A1 1 0 0 1 6 7h10.5A2.5 2.5 0 0 1 19 9.5a1 1 0 1 1-2 0 .5.5 0 0 0-.5-.5H16v4h2a1 1 0 1 1 0 2H7a1 1 0 0 1-.365-1.931L5.051 8.316a1 1 0 0 1 .138-.9M8.72 13H14V9H7.387z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.684 1.052a1 1 0 0 1 1.265.632L8.72 13h9.28a1 1 0 1 1 0 2h-.613l1.092 3.276q.384-.406.707-.858a1 1 0 1 1 1.627 1.164 10.3 10.3 0 0 1-2.198 2.242C16.796 22.19 14.495 23 12 23c-2.496 0-4.798-.811-6.618-2.178a10.3 10.3 0 0 1-2.195-2.24 1 1 0 0 1 1.627-1.164q.321.45.707.858l1.115-3.344a1 1 0 0 1 0-1.863L3.052 2.316a1 1 0 0 1 .632-1.264M8.721 15l-1.544 4.631A9.05 9.05 0 0 0 12 21.001c1.792 0 3.45-.507 4.823-1.37l-1.543-4.63z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RockingChair;

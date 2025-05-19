import React from "react";
const CctvCamera: React.FC<
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
        d="M16.01 13.375v3a2 2 0 0 0 2 2h3v2h-3a4 4 0 0 1-4-4v-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.419 1.913a.75.75 0 0 1 .59-.288h14.555c2.914 0 5.35 2.027 6.016 4.75h-4.57a1 1 0 1 0 0 2h4.73c-.252 3.212-2.915 5.75-6.176 5.75h-5.936a1.75 1.75 0 0 1-1.565-.967L6.999 9.03a.25.25 0 0 0-.122-.116L3.151 7.258a1.75 1.75 0 0 1-.987-1.174l-.882-3.527a.75.75 0 0 1 .137-.644M12.7 7.375a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1M21.01 16.375a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.677 7.62c-.351.313-.667 1.074-.667 1.754a2 2 0 0 0 3.333 1.491l1.334 1.49A4 4 0 0 1 3.01 9.374c0-1.097.457-2.46 1.333-3.245z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CctvCamera;

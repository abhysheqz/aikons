import React from "react";
const Kidneys: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.986 6c.157-1.406-.982-3-3.415-3C4.047 3 2 5.462 2 8.5S3.539 14 6.064 14c1.616 0 2.472-1.254 2.292-2.341"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 8c1.5 0 3.5.496 3.5 3.64 0 4.16-2 5.72-.5 9.36m7-13c-1.5 0-3.5.496-3.5 3.64 0 4.16 2 5.72.5 9.36"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.61 6c.204.571.55 1.943.306 2.857C6.814 9.238 6.5 10 5 10M14.014 6c-.157-1.406.982-3 3.415-3C19.953 3 22 5.462 22 8.5S20.461 14 17.936 14c-1.695 0-2.554-1.38-2.258-2.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.39 6c-.204.571-.55 1.943-.306 2.857C17.186 9.238 17.5 10 19 10"
      />
    </svg>
  );
};
export default Kidneys;

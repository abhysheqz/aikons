import React from "react";
const FilePaste: React.FC<
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
        d="M7.958 1.543a1 1 0 0 1-.001 1.415L6.662 4.25h4.588a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0v-2a1 1 0 0 0-1-1H6.668l1.29 1.29a1 1 0 0 1-1.415 1.413l-3-3a1 1 0 0 1 0-1.414l3-2.997a1 1 0 0 1 1.415.001"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.27 7.447-.02 12.367a2.924 2.924 0 0 0 2.917 2.936h6.803a.97.97 0 0 0 .686-.285l6.809-6.828a.98.98 0 0 0 .285-.692V4.182a2.924 2.924 0 0 0-2.917-2.932H9.266c.271.547.307 1.18.106 1.75h1.878a4.25 4.25 0 0 1 4.25 4.25v2a2.25 2.25 0 0 1-4.5 0V7.5H9.373A2.25 2.25 0 0 1 5.66 9.837zm9.297 13.347 6.237-6.255h-4.737a1.5 1.5 0 0 0-1.5 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FilePaste;

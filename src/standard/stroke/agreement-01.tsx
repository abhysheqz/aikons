import React from "react";
const Agreement_01: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 7h3.52a1 1 0 0 0 .78-.374L6.803 6c.733-.914 1.819-1.234 2.804-.825L11.5 6M2 16h3.712a1 1 0 0 1 .532.153l1.736 1.09c1.888 1.217 2.832 1.825 3.86 1.751 1.461-.105 2.604-1.523 3.577-2.463L17 15"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.982 7h-2.975c-1.148-.692-3.507-2.144-4.96-1.99-.557.06-1.64.147-2.777 1.275l-1.797 1.88c-.354.422-.85 1.508 0 2.468.849.959 1.977.249 2.435-.226l.33-.274a1 1 0 0 1 1.402.124l4.26 5.035a2 2 0 0 0 1.528.708H22"
      />
    </svg>
  );
};
export default Agreement_01;

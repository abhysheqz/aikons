import React from "react";
const Avocado: React.FC<
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
        d="M12 5c0-1 .4-3 2-3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15 16a3 3 0 0 1-3 3v-6a3 3 0 0 1 3 3Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 5C9.607 5 7.667 6.79 7.667 9c0 1.224-.278 2.598-1.029 3.607A5.66 5.66 0 0 0 5.5 16c0 3.314 2.91 6 6.5 6s6.5-2.686 6.5-6c0-1.26-.42-2.428-1.138-3.393-.751-1.009-1.029-2.383-1.029-3.607 0-2.21-1.94-4-4.333-4Z"
      />
    </svg>
  );
};
export default Avocado;

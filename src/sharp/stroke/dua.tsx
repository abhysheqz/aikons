import React from "react";
const Dua: React.FC<
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
        strokeWidth={1.5}
        d="M14.993 7.432A3.229 3.229 0 1 1 10.56 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.993 3.999h.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.503 16.52 4.99 12.966V7.864c-.01-.35-.198-.734-.276-.89a2 2 0 0 0-1.572-.973h-1.05a.1.1 0 0 0-.1.1v8.352a.1.1 0 0 0 .027.068L8.04 21h3.95v-5.508l-3.753-3.362c-.218-.137-.674-.415-1.285-.373-.776.054-1.203.435-1.538.784M15.477 16.512l3.514-3.554V7.856c.009-.35.197-.734.276-.889a2 2 0 0 1 1.572-.974h1.05a.1.1 0 0 1 .1.1v8.352a.1.1 0 0 1-.027.068l-6.022 6.48h-3.95v-5.507l3.752-3.363c.218-.137.675-.415 1.285-.373.859.06 1.29.52 1.643.894"
      />
    </svg>
  );
};
export default Dua;

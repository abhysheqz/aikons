import React from "react";
const Attachment: React.FC<
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
        d="M9.574 4.2A3.89 3.89 0 0 0 5.69 8.1v5.363c0 3.5 2.825 6.337 6.309 6.337s6.309-2.837 6.309-6.337V12h1.941v1.463c0 4.577-3.694 8.287-8.25 8.287s-8.25-3.71-8.25-8.287V8.1c0-3.23 2.607-5.85 5.824-5.85s5.823 2.62 5.823 5.85v5.363A3.405 3.405 0 0 1 12 16.875a3.405 3.405 0 0 1-3.397-3.412v-3.9h1.941v3.9A1.46 1.46 0 0 0 12 14.925a1.46 1.46 0 0 0 1.456-1.463V8.1c0-2.154-1.738-3.9-3.882-3.9"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Attachment;

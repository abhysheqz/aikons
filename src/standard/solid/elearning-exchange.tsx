import React from "react";
const ElearningExchange: React.FC<
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
        d="M20.353 8.627c-1.299-3.359-4.54-6.04-9.716-5.574a1 1 0 0 1-.18-1.992c6.103-.55 10.155 2.69 11.76 6.845 1.412 3.65.943 8.06-1.693 11.094H21a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1v-2.5a1 1 0 0 1 2 0v.204c2.094-2.404 2.544-5.999 1.354-9.077M1.999 4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0v-.206c-2.102 2.399-2.544 5.973-1.347 9.042 1.305 3.347 4.553 6.032 9.707 5.623a1 1 0 1 1 .158 1.993c-6.069.483-10.115-2.754-11.728-6.89C.369 12.423.829 8.03 3.472 5h-.473a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.5 14.75h5.75v1.5H9.5a.75.75 0 0 1 0-1.5M7.25 9v6.5a2.25 2.25 0 0 0 2.25 2.25H16a.75.75 0 0 0 .75-.75V7a.75.75 0 0 0-.75-.75h-6A2.75 2.75 0 0 0 7.25 9m3.75.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ElearningExchange;

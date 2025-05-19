import React from "react";
const Kettle: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.75 8a2.75 2.75 0 0 1 5.5 0v1.252a.75.75 0 0 1-.937.726A7.3 7.3 0 0 0 10.5 9.75c-.627 0-1.234.08-1.813.228a.75.75 0 0 1-.937-.726zM22.5 12a.5.5 0 0 0-.5.5V15c0 .945-.527 1.712-1.164 2.205-.64.495-1.48.795-2.336.795a1 1 0 1 1 0-2c.406 0 .816-.148 1.111-.376.298-.23.389-.465.389-.624v-2.5a2.5 2.5 0 0 1 2.5-2.5 1 1 0 1 1 0 2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.5 9a7 7 0 0 1 14 0v3h-2V9a5 5 0 0 0-10 0v3h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.782 16.25H12.5a.75.75 0 0 1 0 1.5H1.75V19a2.75 2.75 0 0 0 2.75 2.75h12A2.75 2.75 0 0 0 19.25 19v-2a8.75 8.75 0 0 0-17.468-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Kettle;

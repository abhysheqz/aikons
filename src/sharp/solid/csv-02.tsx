import React from "react";
const Csv_02: React.FC<
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
        d="M15.75 13.25v1.5h-2.502v1h2.502v4h-4.002v-1.5h2.502v-1h-2.502v-4zM10.75 16h-1.5v-1.25h-1.5v3.5h1.5V17h1.5v2.75h-4.5v-6.5h4.5zM19.99 19.75h-1.398l-1.76-6.5h1.553l.906 3.343.905-3.343h1.554z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m2.251 1.25-.001 21.5h17.5V21H5v-9h14.75V8.63l-7.39-7.38zm9.312 1.955 6.236 6.255h-6.236z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Csv_02;

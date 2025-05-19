import React from "react";
const Satellite_03: React.FC<
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
        d="M11.807 5.613a4.653 4.653 0 1 1 6.58 6.58l-3.63 3.63a1.75 1.75 0 0 1-2.474 0l-4.106-4.106a1.75 1.75 0 0 1 0-2.475zM6.773 13.003a1 1 0 0 1 1.072.922c.081 1.07 1.134 2.124 2.232 2.209a1 1 0 1 1-.154 1.994c-2.066-.16-3.915-1.982-4.072-4.052a1 1 0 0 1 .922-1.073m-3.716 1.236a1 1 0 0 1 .948 1.05c-.06 1.179.477 2.39 1.403 3.308.925.918 2.151 1.456 3.348 1.399a1 1 0 0 1 .096 1.997C7 22.083 5.25 21.257 4 20.017s-2.086-2.98-1.992-4.83a1 1 0 0 1 1.05-.948"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.293 2.293a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1-1.414 1.414L10 4.414 8.414 6l1.793 1.793a1 1 0 0 1-1.414 1.414l-2.5-2.5a1 1 0 0 1 0-1.414zm8.5 8.5a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414 0l-2.5-2.5a1 1 0 0 1 1.414-1.414L18 15.586 19.586 14l-1.793-1.793a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Satellite_03;

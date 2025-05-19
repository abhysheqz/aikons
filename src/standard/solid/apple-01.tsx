import React from "react";
const Apple_01: React.FC<
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
        d="M8 4c-1.762 0-3.276.96-4.316 2.259A7.76 7.76 0 0 0 2 11.028c0 3.655.53 6.374 2.667 9.594l.032.046c.86 1.152 1.939 1.971 3.21 2.24 1.28.269 2.59-.054 3.838-.871l.253-.153.253.153c1.247.817 2.559 1.14 3.837.87 1.272-.268 2.351-1.087 3.211-2.24l.032-.045C21.47 17.402 22 14.683 22 11.028a7.76 7.76 0 0 0-1.684-4.77C19.276 4.96 17.762 4 16 4c-.958 0-1.906.378-2.68.808-.479.267-.928.575-1.32.88a10.4 10.4 0 0 0-1.32-.88C9.906 4.378 8.957 4 8 4m.529 4.849A1 1 0 0 0 7.47 7.15C5.948 8.1 5 10.088 5 12a1 1 0 1 0 2 0c0-1.355.697-2.634 1.529-3.151"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.48 3.975C13.13 4.622 13 5.445 13 6a1 1 0 1 1-2 0c0-.779.17-1.955.72-2.975C12.294 1.96 13.338 1 15 1a1 1 0 1 1 0 2c-.738 0-1.194.372-1.52.975"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Apple_01;

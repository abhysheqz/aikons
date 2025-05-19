import React from "react";
const Scooter_02: React.FC<
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
        d="M2.779 11.579C3.895 10.528 5.402 10 7 10s3.105.528 4.221 1.579C12.346 12.639 13 14.162 13 16v1H1v-1c0-1.838.654-3.361 1.779-4.421"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 9H5V7h4zM5 16a2 2 0 1 0 4 0h2a4 4 0 0 1-8 0zM20 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.755 9H19a1 1 0 0 0 1-1v-.032c0-.439 0-.817-.021-1.13a3.1 3.1 0 0 0-.207-.986 3 3 0 0 0-1.624-1.624 3.1 3.1 0 0 0-.988-.207C16.845 4 16.464 4 16.022 4h-3.078v2h2.046v2c0 .94-.055 2.818-.537 4.432-.24.806-.564 1.466-.973 1.91-.381.417-.844.658-1.48.658a1 1 0 1 0 0 2h3.5a4.5 4.5 0 0 1 5.162-4.452 9.4 9.4 0 0 0-1.342-2.817A10 10 0 0 0 18.754 9"
      />
    </svg>
  );
};
export default Scooter_02;

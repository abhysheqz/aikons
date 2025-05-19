import React from "react";
const SunCloud_02: React.FC<
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
        d="M1.375 16.125a5.75 5.75 0 0 1 4.603-5.635 6.252 6.252 0 0 1 12.394.938 5.251 5.251 0 0 1-.747 10.447h-10.5a5.75 5.75 0 0 1-5.75-5.75"
      />
      <path
        fill="currentColor"
        d="M7.457 2.863a1 1 0 1 0-1.93.525l.014.05A6.15 6.15 0 0 0 3.309 5.13l-.224-.127a1 1 0 0 0-.99 1.737l.205.118a6 6 0 0 0-.364 2.73l-.066.017a1 1 0 0 0 .51 1.934l.079-.02q.179.39.406.744c.452-.498.99-.917 1.591-1.232a4 4 0 0 1-.406-.975 4.03 4.03 0 0 1 .414-3.1 4.15 4.15 0 0 1 2.54-1.92 4.24 4.24 0 0 1 3.436.569 6.3 6.3 0 0 1 2.622-.16 1 1 0 0 0-.163-.284 6 6 0 0 0-.884-.878l.114-.196a1 1 0 0 0-1.726-1.01l-.125.214a6.2 6.2 0 0 0-2.804-.365z"
      />
    </svg>
  );
};
export default SunCloud_02;

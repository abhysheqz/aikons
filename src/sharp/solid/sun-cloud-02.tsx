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
        fillRule="evenodd"
        d="M5.705 3.851c-.63.13-1.217.38-1.735.724l-.766-.772-1.42 1.41.775.78a5 5 0 0 0-.724 1.757H.75v2h1.085a5 5 0 0 0 1.58 2.747l1.329-1.494A3 3 0 0 1 3.735 8.75c0-1.664 1.337-3 2.97-3a2.95 2.95 0 0 1 2.276 1.072l1.538-1.279a4.97 4.97 0 0 0-2.814-1.692v-1.1h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.75 15.5a5.75 5.75 0 0 1 4.603-5.635 6.252 6.252 0 0 1 12.394.938A5.251 5.251 0 0 1 18 21.25H7.5a5.75 5.75 0 0 1-5.75-5.75"
      />
    </svg>
  );
};
export default SunCloud_02;

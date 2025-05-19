import React from "react";
const Alien_02: React.FC<
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
        d="M15 9.986a2.997 2.997 0 0 1-3 2.994c-1.657 0-3-1.34-3-2.994a2.997 2.997 0 0 1 3-2.995c1.657 0 3 1.34 3 2.995Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.99 16.973H12"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20.5 2c0 .998-1 2.756-3 2.995M3.5 2c0 .998 1 2.756 3 2.995"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19.523 10.494C19.523 7.583 17.276 3 11.995 3c-2.02 0-7.277 1.405-7.483 7.478-.49-.02-1.061-.034-1.507.105-.578.18-.974.598-1.001 1.397.106.888.468 1.349 1.373 1.492.32.051.642 0 1.138 0v8.482a.01.01 0 0 0 .015.009l3.982-2.009a.01.01 0 0 1 .01 0L12 21.967a.01.01 0 0 0 .01 0l3.481-2.013a.01.01 0 0 1 .01 0l4.006 2.04a.01.01 0 0 0 .015-.008V13.48c.236 0 1.196.034 1.537-.1.624-.245.947-.854.947-1.395-.163-1.708-1.586-1.492-2.485-1.492Z"
      />
    </svg>
  );
};
export default Alien_02;

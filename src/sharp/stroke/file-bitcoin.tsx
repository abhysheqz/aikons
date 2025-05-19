import React from "react";
const FileBitcoin: React.FC<
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
        d="M16.001 16.49h3.5m-3.5 0v-3.498h2m-2 3.497v3.497h2m1.5-3.497c.828 0 1.5-.782 1.5-1.748s-.672-1.749-1.5-1.749h-1.5m1.5 3.497c.828 0 1.5.783 1.5 1.749 0 .965-.672 1.748-1.5 1.748h-1.5m0-6.994v-1.998m0 8.992v1.999M9.999 2.002v6.994h-7"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20 8.99V2.012a.01.01 0 0 0-.01-.01h-10L3.033 8.987v13.001q.001.01.01.01h9.97"
      />
    </svg>
  );
};
export default FileBitcoin;

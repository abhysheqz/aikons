import React from "react";
const ImageFlipVertical: React.FC<
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
      viewBox="0 0 24 25"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.457 5.907 9.534 3.833C7.52 2.768 6.514 2.236 5.757 2.63S5 4.08 5 6.193v2.074c0 1.289 0 1.933.442 2.333.441.4 1.152.4 2.573.4h3.923c4.487 0 6.73 0 7.031-1.01.302-1.01-1.636-2.034-5.512-4.083ZM13.457 19.093l-3.923 2.074c-2.014 1.065-3.02 1.597-3.777 1.203S5 20.92 5 18.807v-2.074c0-1.289 0-1.933.442-2.333.441-.4 1.152-.4 2.573-.4h3.923c4.487 0 6.73 0 7.031 1.01.302 1.01-1.636 2.034-5.512 4.083Z"
      />
    </svg>
  );
};
export default ImageFlipVertical;

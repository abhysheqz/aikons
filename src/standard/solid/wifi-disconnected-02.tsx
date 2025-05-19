import React from "react";
const WifiDisconnected_02: React.FC<
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
        d="M8.793 14.293a1 1 0 0 1 1.414 0L12 16.086l1.793-1.793a1 1 0 0 1 1.414 1.414L13.414 17.5l1.793 1.793a1 1 0 0 1-1.414 1.414L12 18.914l-1.793 1.793a1 1 0 0 1-1.414-1.414l1.793-1.793-1.793-1.793a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.087 9c2.59 0 5.094 1.14 7.14 3.314a1 1 0 1 1-1.455 1.372C16.052 11.859 14.056 11 12.087 11c-1.972 0-4.036.863-5.88 2.707a1 1 0 0 1-1.414-1.414C6.949 10.137 9.5 9 12.087 9"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3c3.695 0 7.338 1.443 10.645 4.236a1 1 0 1 1-1.29 1.528C18.346 6.224 15.147 5 12 5S5.654 6.223 2.645 8.764a1 1 0 0 1-1.29-1.528C4.662 4.443 8.305 3 12 3"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WifiDisconnected_02;

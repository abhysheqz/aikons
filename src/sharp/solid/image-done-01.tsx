import React from "react";
const ImageDone_01: React.FC<
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
        d="m16 9.418 6.707-6.707-1.414-1.414L16 6.59l-1.293-1.293-1.414 1.414zM17.747 3H2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6.253l-5 5-4.546-4.546 3.253-3.253L16 4.747zM6.232 21h12.769v-3.765l-4.932-3.288z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageDone_01;

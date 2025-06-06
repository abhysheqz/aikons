import React from "react";
const Niqab: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.5 1.25c-1.836 0-3.52.843-4.738 2.081C6.547 4.568 5.75 6.25 5.75 8c0 .837-.305 2.305-.891 3.97-.581 1.65-1.41 3.412-2.402 4.838-.498.715-.464 1.78.307 2.395 5.937 4.73 13.535 4.73 19.472 0 .77-.615.805-1.68.307-2.395-.991-1.426-1.82-3.189-2.402-4.838-.587-1.665-.891-3.133-.891-3.97 0-1.75-.798-3.432-2.013-4.669-1.217-1.238-2.902-2.081-4.737-2.081m-2.25 6.723c0-1.221 1.001-2.223 2.25-2.223s2.25 1.002 2.25 2.223v.277h-4.5zM12.5 4.25c2.065 0 3.75 1.66 3.75 3.723V17a1.75 1.75 0 0 1-1.75 1.75h-4A1.75 1.75 0 0 1 8.75 17V7.973c0-2.062 1.685-3.723 3.75-3.723M14.75 17v-5.75h-4.5V17c0 .138.112.25.25.25h4a.25.25 0 0 0 .25-.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Niqab;

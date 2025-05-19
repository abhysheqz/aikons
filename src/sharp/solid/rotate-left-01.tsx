import React from "react";
const RotateLeft_01: React.FC<
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
        d="M15.198.789a7.18 7.18 0 0 0-5.093 1.415V.789h-2v4.93h4.5V3.723h-1.193a5.17 5.17 0 0 1 3.581-.948c1.862.192 3.695 1.355 4.719 3.392l1.787-.895c-1.324-2.636-3.747-4.22-6.3-4.483"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.042 21.89h-.014c-.153.004-.365.01-.603.013-.47.006-1.067.007-1.51-.022-.803-.051-1.958-.217-2.993-.615-1-.385-2.106-1.074-2.422-2.303-.71-2.757.19-5.304 1.074-6.838l-3.92-2.242c-1.172-.67-1.457-2.201-.83-3.278.672-1.151 2.102-1.419 3.193-.795l6.391 3.655-.176-.933a2.34 2.34 0 0 1 1.963-2.745 2.36 2.36 0 0 1 2.555 1.476l.004.01 2.106 5.924 2.424 1.327-5.087 8.726z"
      />
    </svg>
  );
};
export default RotateLeft_01;

import React from "react";
const Chess_01: React.FC<
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
        d="M7.182 1.32a.75.75 0 0 1 .798.104l2.791 2.326h2.457l2.792-2.326A.75.75 0 0 1 17.25 2v4.81l-2.72 2.72a.75.75 0 0 1-.53.22h-4a.75.75 0 0 1-.53-.22L6.75 6.81V2a.75.75 0 0 1 .432-.68"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 18.75H5v-1.5h14z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.441 13.47c.121.788.314 1.553.595 2.28H7.963c.281-.726.474-1.492.595-2.279L9.36 8.25h5.28zM5 17.25v1.5h1.519c-.141.242-.276.45-.398.609-.592.77-.871 1.705-.871 2.641v.75h13.5V22c0-.936-.279-1.871-.871-2.64a6 6 0 0 1-.398-.61H19v-1.5z"
      />
    </svg>
  );
};
export default Chess_01;

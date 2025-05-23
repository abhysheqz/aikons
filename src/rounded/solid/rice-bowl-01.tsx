import React from "react";
const RiceBowl_01: React.FC<
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
        d="M2.614 11.476a5.6 5.6 0 0 1 1.172-.1h14.177a5.6 5.6 0 0 1 1.173.1c.351.076.714.22 1.001.503.61.603.55 1.482.345 2.309-.397 1.596-1.168 2.604-2.063 3.44-.372.347-.772.67-1.16.983-.422.343-1.027.842-1.43 1.238l.215.487a1.8 1.8 0 0 1 .161.688c0 .356-.086.69-.28.974a1.6 1.6 0 0 1-.706.566c-.469.202-1.014.211-1.359.211H7.89c-.345 0-.89-.01-1.36-.211a1.6 1.6 0 0 1-.705-.566 1.7 1.7 0 0 1-.28-.974c0-.275.091-.523.154-.677l.214-.506c-.4-.392-1.003-.89-1.422-1.23-.388-.313-.788-.636-1.16-.983-.895-.836-1.667-1.844-2.063-3.44-.205-.827-.265-1.706.345-2.31.286-.283.65-.426 1.001-.502"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.696 5.092c-1.926.12-3.468 1.915-3.302 3.845a3.52 3.52 0 0 0-2.019 3.188 1 1 0 1 0 2 0c0-.785.587-1.423 1.329-1.508a1 1 0 0 0 .8-1.398c-.48-1.088.58-2.347 1.694-2.1a1.5 1.5 0 0 1 .876.57 1 1 0 0 0 1.603-1.197 3.5 3.5 0 0 0-.949-.876c.74-.837 2.393-.604 2.624.7a1 1 0 0 0 1.2.802c.936-.206 1.809.623 1.813 1.529q-.452.062-.893.255a1 1 0 0 0 .806 1.83c.938-.412 2.097.322 2.097 1.393a1 1 0 1 0 2 0c0-1.435-.862-2.608-2.024-3.164.172-1.917-1.328-3.765-3.299-3.873-1.186-2.619-5.173-2.617-6.356.004"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.515 2.357a1 1 0 0 1 .128 1.408l-5 6a1 1 0 1 1-1.536-1.28l5-6a1 1 0 0 1 1.408-.128M18.323 1.23a1 1 0 0 1 .447 1.342l-2 4a1 1 0 0 1-1.79-.894l2-4a1 1 0 0 1 1.343-.447"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RiceBowl_01;

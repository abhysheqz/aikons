import React from "react";
const Wav_01: React.FC<
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
        d="m3.25 13.75.001-12.5h10.11l7.389 7.38v5.12zM18.8 9.46l-6.238-6.255V9.46z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.16 15.25h1.5v7.5H8.009L6.41 20.352 4.811 22.75H3.16v-7.5h1.5v5.023l1.75-2.625 1.75 2.625z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.924 20.75h-1.528l-.544 2h-1.554l2.039-7.5h1.646l2.039 7.5h-1.554zm-.407-1.5h-.712l.356-1.31z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m18.723 22.75 2.117-7.5h-1.557L17.91 20.18l-1.373-4.929H14.98l2.117 7.5z"
      />
    </svg>
  );
};
export default Wav_01;

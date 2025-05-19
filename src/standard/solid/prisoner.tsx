import React from "react";
const Prisoner: React.FC<
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
        d="M9.206 12.779a.75.75 0 0 1 .515.927l-.858 3.004 2.987 2.24a.25.25 0 0 0 .3 0l2.987-2.24-.858-3.004a.75.75 0 1 1 1.442-.412l.892 3.12 2.778.926A4.91 4.91 0 0 1 22.75 22a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75 4.91 4.91 0 0 1 3.359-4.66l2.779-.926.89-3.12a.75.75 0 0 1 .928-.515"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.947 6.252a.75.75 0 0 1 .801.695l.18 2.511a4.083 4.083 0 0 0 8.145 0l.179-2.511a.75.75 0 1 1 1.496.106l-.18 2.512a5.583 5.583 0 0 1-11.137 0l-.18-2.512a.75.75 0 0 1 .696-.801"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.75 6.117v-.16c0-1.714-1.168-3.186-2.864-3.966-.86-.394-1.794-.74-2.885-.741-1.092 0-2.027.346-2.887.741-1.696.78-2.864 2.252-2.864 3.965v.16q-.262.087-.514.182a.75.75 0 0 0 .528 1.404q.45-.17.944-.312c1.398-.405 3.035-.64 4.792-.64s3.394.235 4.792.64q.494.143.944.312a.75.75 0 1 0 .528-1.404q-.253-.095-.514-.181"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Prisoner;

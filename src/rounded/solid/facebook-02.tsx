import React from "react";
const Facebook_02: React.FC<
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
        d="M5.559 10.208c-1.083 0-1.309.207-1.309 1.195v1.791c0 .989.226 1.195 1.309 1.195h2.617v7.167c0 .988.225 1.194 1.308 1.194h2.617c1.082 0 1.308-.206 1.308-1.194v-7.167h2.939c.82 0 1.032-.146 1.258-.866l.56-1.792c.387-1.235.149-1.523-1.258-1.523H13.41V7.222c0-.66.586-1.194 1.309-1.194h3.724c1.082 0 1.308-.206 1.308-1.195V2.444c0-.988-.226-1.194-1.308-1.194h-3.724c-3.613 0-6.542 2.674-6.542 5.972v2.986z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Facebook_02;

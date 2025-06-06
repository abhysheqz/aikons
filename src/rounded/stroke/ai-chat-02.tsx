import React from "react";
const AiChat_02: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.17 20.89c4.184-.277 7.516-3.657 7.79-7.9.053-.83.053-1.69 0-2.52-.274-4.242-3.606-7.62-7.79-7.899a33 33 0 0 0-4.34 0c-4.184.278-7.516 3.657-7.79 7.9-.053.83-.053 1.69 0 2.52.1 1.545.783 2.976 1.588 4.184.467.845.159 1.9-.328 2.823-.35.665-.526.997-.385 1.237.14.24.455.248 1.084.263 1.245.03 2.084-.322 2.75-.813.377-.279.566-.418.696-.434s.387.09.899.3c.46.19.995.307 1.485.34 1.425.094 2.914.094 4.342 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m7.5 15 1.842-5.526a.694.694 0 0 1 1.316 0L12.5 15m3-6v6m-7-2h3"
      />
    </svg>
  );
};
export default AiChat_02;

import React from "react";
const PenConnectWifi: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.492 10h.01"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.003 4.416C11.595 2.923 9.65 2 7.502 2S3.408 2.923 2 4.416m2.75 2.917a3.77 3.77 0 0 1 2.752-1.208 3.77 3.77 0 0 1 2.75 1.208"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m15.915 9.033-9.907 9.955V22h2.98l10.055-10.012m-3.128-2.955 3.056-3.004a.1.1 0 0 1 .142.001l2.859 2.932a.1.1 0 0 1-.002.14l-2.927 2.886m-3.128-2.955 3.128 2.955"
      />
    </svg>
  );
};
export default PenConnectWifi;

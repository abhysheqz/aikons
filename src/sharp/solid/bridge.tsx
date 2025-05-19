import React from "react";
const Bridge: React.FC<
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
        d="M5 8.122V14H2v2h3v4h2v-4h10v4h2v-4h3v-2h-3V8.121c.284.15.566.274.828.375.883.34 1.759.504 2.172.504V7h-.001q-.01.002-.135-.015a5 5 0 0 1-.345-.063 7 7 0 0 1-.973-.293c-.63-.242-1.19-.571-1.547-.969V4h-2v1.693C15.977 7.163 14.3 9 12 9S8.023 7.163 7 5.692V4H5v1.661c-.356.397-.916.726-1.546.968a7 7 0 0 1-.972.293q-.21.044-.346.063C2.052 6.997 2.009 7 2 7H2v2c.413 0 1.289-.165 2.171-.504.262-.101.544-.224.828-.374m12 .668V14h-2v-3.747a8.7 8.7 0 0 0 2-1.463m-4 2.131a6.3 6.3 0 0 1-2 0V14h2zm-4-.668V14H7V8.79a8.7 8.7 0 0 0 2 1.463"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bridge;

import React from "react";
const DeliveryView_01: React.FC<
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
        d="M19.513 1.25H4.48L1.25 7.803V22c0 .414.336.75.75.75h10.79c-.401-.3-.747-.608-1.03-.883-.551-.532-.99-1.057-1.29-1.446-.151-.197-1.286-1.921-1.286-1.921s1.135-1.724 1.286-1.92c.3-.39.739-.915 1.29-1.447 1.012-.98 2.81-2.383 5.1-2.383 2.288 0 4.087 1.404 5.099 2.383.298.288.563.574.791.837V7.803zm.755 6-1.973-4h-5.31v4zm-9.257 0v-4H5.7l-1.974 4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.75 18.5s-.34-.526-.377-.579a12.007 12.007 0 0 0-1.457-1.71c-.94-.91-2.374-1.961-4.057-1.961s-3.116 1.051-4.057 1.96a12 12 0 0 0-1.457 1.711c-.036.053-.376.579-.376.579s.34.526.376.579a12.018 12.018 0 0 0 1.457 1.71c.94.91 2.374 1.961 4.057 1.961s3.116-1.051 4.057-1.96a12 12 0 0 0 1.457-1.711c.036-.053.376-.579.376-.579m-5.9-2c-1.1 0-1.99.895-1.99 2s.89 2 1.99 2h.018c1.1 0 1.991-.895 1.991-2s-.891-2-1.99-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DeliveryView_01;

import React from "react";
const LocationOffline_02: React.FC<
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
        d="M2.997 7.085c-1.422 3.324-.652 6.152.95 8.574 1.315 1.986 3.231 3.759 4.96 5.358h.001q.496.458.963.896l.001.002a3.12 3.12 0 0 0 2.13.835c.79 0 1.554-.297 2.129-.836q.441-.412.908-.84c.873-.805 1.794-1.654 2.664-2.553.188-.195.282-.292.281-.415s-.098-.22-.292-.414L5.034 5.034c-.214-.214-.32-.32-.456-.312s-.224.124-.401.353a9.3 9.3 0 0 0-1.18 2.01M20.058 15.66c1.601-2.424 2.368-5.255.948-8.575-1.528-3.572-5.178-5.835-9.004-5.835a10 10 0 0 0-4.908 1.303c-.286.162-.428.243-.448.39s.1.268.343.51l12.279 12.28c.174.174.262.261.366.273.042.005.087 0 .126-.013.1-.032.166-.132.298-.332"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LocationOffline_02;

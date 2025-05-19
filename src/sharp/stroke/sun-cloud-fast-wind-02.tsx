import React from "react";
const SunCloudFastWind_02: React.FC<
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
        d="M17.977 18.276c2.361 0 4.275-1.783 4.275-3.983s-1.914-3.983-4.275-3.983h-.021m0 0q.021-.218.021-.442c0-2.689-2.34-4.868-5.225-4.868-2.733 0-4.976 1.955-5.206 4.445m10.41.865a4.68 4.68 0 0 1-1.173 2.655m-9.237-3.52c-2.41.214-4.294 2.105-4.294 4.406 0 4.783 8.43 6.233 11.146 2.655.725-1.169-.245-2.655-1.646-2.655-1.05 0-1.9.792-1.9 1.77M7.546 9.445q.225-.02.456-.02c1.07 0 2.057.33 2.85.885"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.705 3.5v-2m0 2c-2.192 0-3.97 1.79-3.97 4m3.97-4a3.95 3.95 0 0 1 3.045 1.433m-9 2.567h1.985m0 0c0 1.195.52 2.267 1.344 3M3.495 3.258l1.403 1.414M14.906 22.415q.218.084.461.085c.765 0 1.385-.672 1.385-1.5s-.62-1.5-1.385-1.5a1.3 1.3 0 0 0-.738.23c-1.061.793-3.027 1.808-5.262 2.071m-2.769-.107a7.6 7.6 0 0 1-1.846-.646M19.752 21.5h2"
      />
    </svg>
  );
};
export default SunCloudFastWind_02;

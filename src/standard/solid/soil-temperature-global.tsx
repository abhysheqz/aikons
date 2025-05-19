import React from "react";
const SoilTemperatureGlobal: React.FC<
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
        d="M19 22a3 3 0 0 0 1.5-5.599V13.5a1.5 1.5 0 0 0-3 0v2.901A2.999 2.999 0 0 0 19 22"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.707 15.293a1 1 0 0 1 0 1.414 3 3 0 0 0-.5.74c-.075.15-.132.29-.168.403-.034.106-.038.155-.039.155V18a1 1 0 1 1-2 0c0-.493.215-1.042.418-1.447.219-.437.526-.911.875-1.26a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 9c-5.71 0-10.998 3.934-12.539 9.277a1 1 0 1 1-1.922-.554C9.333 11.5 15.424 7 22 7a1 1 0 0 1 0 2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 5C13.913 5 7.193 10.647 5.474 18.221a1 1 0 1 1-1.95-.442C5.444 9.32 12.952 3 21.999 3a1 1 0 0 1 0 2M4.053 11.394C3.28 11.008 2.49 11 2 11a1 1 0 1 1 0-2h.02c.52 0 1.715 0 2.927.606a1 1 0 1 1-.894 1.788M1 6a1 1 0 0 1 1-1c2.008 0 3.641.367 5.377 1.074a1 1 0 1 1-.754 1.852C5.103 7.307 3.724 7 2 7a1 1 0 0 1-1-1M1 2a1 1 0 0 1 1-1c3.395 0 6.396 1.071 9.015 2.643a1 1 0 0 1-1.03 1.714C7.605 3.93 4.956 3 2 3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SoilTemperatureGlobal;

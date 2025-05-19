import React from "react";
const Astronaut_02: React.FC<
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
        d="M12 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-8 6a8 8 0 1 1 16 0 8 8 0 0 1-16 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16 10c0 1.657-1.79 3-4 3s-4-1.343-4-3 1.79-3 4-3 4 1.343 4 3"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.648 7.961C17.33 7.085 17.924 6 19.003 6a4 4 0 0 1 0 8c-1.079 0-1.672-1.085-1.355-1.961.229-.635.355-1.322.355-2.039s-.126-1.404-.355-2.039M5 14a4 4 0 0 1 0-8c1.077 0 1.67 1.084 1.354 1.96A6 6 0 0 0 5.999 10c0 .718.125 1.404.355 2.04C6.671 12.916 6.077 14 5 14"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.5 1.5a1 1 0 0 1 1 1V7a1 1 0 1 1-2 0V2.5a1 1 0 0 1 1-1M8.884 16.25h6.231999999999999c.818 0 1.376 0 1.855.128a3.75 3.75 0 0 1 2.651 2.651c.128.48.128 1.037.128 1.855V21a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75v-.116c0-.818 0-1.376.128-1.855a3.75 3.75 0 0 1 2.651-2.651c.48-.128 1.037-.128 1.855-.128"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Astronaut_02;

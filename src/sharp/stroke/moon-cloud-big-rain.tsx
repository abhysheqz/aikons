import React from "react";
const MoonCloudBigRain: React.FC<
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
        d="M17.478 11h.022a4.5 4.5 0 0 1 4.5 4.5c0 2.325-1.738 4.263-4 4.5m-.522-9q.021-.247.022-.5a5.5 5.5 0 0 0-10.98-.477M17.478 11a5.48 5.48 0 0 1-1.235 3M6.52 10.023A5 5 0 0 0 2 15c0 2.419 1.718 4.512 4 4.975m.52-9.952Q6.757 10 7 10c1.126 0 2.165.372 3 1"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 16c-.74.716-2.5 2.248-2.5 3.503C9.5 20.734 10.447 22 12 22s2.5-1.266 2.5-2.497c0-1.255-1.76-2.787-2.5-3.503Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 5.138a4.1 4.1 0 0 0-.466-1.253A4.03 4.03 0 0 0 7.136 2a3.18 3.18 0 0 1-1.547 3.138 3.12 3.12 0 0 1-3.465-.216c-.249.993-.13 2.082.418 3.04a4.02 4.02 0 0 0 4.594 1.885"
      />
    </svg>
  );
};
export default MoonCloudBigRain;

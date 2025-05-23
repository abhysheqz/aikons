import React from "react";
const SunCloudAngledRainZap_02: React.FC<
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
        d="M9.079 15 7 18.5h3L7.922 22M16 20l-1 2m-2-2-1 2M17.478 10.9h.022c2.485 0 4.5 1.982 4.5 4.426 0 1.927-1.252 3.566-3 4.174m-1.522-8.6q.021-.242.022-.491C17.5 7.422 15.038 5 12 5 9.123 5 6.762 7.172 6.52 9.94m10.958.96a5.34 5.34 0 0 1-1.235 2.951M6.52 9.94C3.984 10.177 2 12.278 2 14.835c0 1.608.786 3.037 2 3.934m2.52-8.83q.237-.021.48-.022c1.126 0 2.165.366 3 .984"
      />
      <path
        fill="currentColor"
        d="M7.955 2a.75.75 0 1 0-1.5 0zM2 6.75a.75.75 0 0 0 0 1.5zm2.03-3.507a.75.75 0 1 0-1.06 1.06zm-.162 1.96a.75.75 0 0 0 1.06-1.061zm-.349 5.264a.75.75 0 0 0 1.174-.934zM7.955 3.5V2h-1.5v1.5zM2 8.25h1.235v-1.5H2zm.97-3.946.898.898 1.06-1.06-.898-.899zM3.985 7.5c0-1.8 1.447-3.25 3.22-3.25v-1.5c-2.612 0-4.72 2.132-4.72 4.75zm3.22-3.25c1.01 0 2.139.533 2.718 1.23l1.154-.96C10.2 3.466 8.64 2.75 7.205 2.75zM4.693 9.533A3.25 3.25 0 0 1 3.985 7.5h-1.5c0 1.121.387 2.154 1.034 2.967z"
      />
    </svg>
  );
};
export default SunCloudAngledRainZap_02;

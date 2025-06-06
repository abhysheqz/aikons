import React from "react";
const SunCloudSlowWind_02: React.FC<
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
        d="m8 17.658.327-.258c.675-.533 1.47-.533 2.146 0l.254.2c.675.533 1.47.533 2.146 0l.254-.2c.675-.533 1.47-.533 2.146 0l.254.2q.228.18.473.28m-2 3.72.27-.2c.718-.533 1.563-.533 2.28 0l.27.2c.718.533 1.564.533 2.282 0l.27-.2c.717-.533 1.563-.533 2.28 0l.348.258M10 21.6l-.27-.2c-.717-.533-1.563-.533-2.28 0l-.27.2c-.718.533-1.564.533-2.282 0l-.27-.2c-.717-.533-1.563-.533-2.28 0L2 21.658M17.478 10.9h.022c2.485 0 4.5 1.982 4.5 4.426 0 .943.011 1.918-.5 2.674m-4.022-7.1q.021-.242.022-.491C17.5 7.422 15.038 5 12 5 9.123 5 6.762 7.172 6.52 9.94m10.958.96a5.34 5.34 0 0 1-1.235 2.951M6.52 9.94C3.984 10.177 2 12.278 2 14.835c0 1.14.338 2.295 1 3.165m3.52-8.06q.237-.023.48-.023c1.126 0 2.165.366 3 .984"
      />
      <path
        fill="currentColor"
        d="M7.955 2a.75.75 0 1 0-1.5 0zM2 6.75a.75.75 0 0 0 0 1.5zm2.03-3.507a.75.75 0 1 0-1.06 1.06zm-.162 1.96a.75.75 0 0 0 1.06-1.061zm-.349 5.264a.75.75 0 0 0 1.174-.934zM7.955 3.5V2h-1.5v1.5zM2 8.25h1.235v-1.5H2zm.97-3.946.898.898 1.06-1.06-.898-.899zM3.985 7.5c0-1.8 1.447-3.25 3.22-3.25v-1.5c-2.612 0-4.72 2.132-4.72 4.75zm3.22-3.25c1.01 0 2.139.533 2.718 1.23l1.154-.96C10.2 3.466 8.64 2.75 7.205 2.75zM4.693 9.533A3.25 3.25 0 0 1 3.985 7.5h-1.5c0 1.121.387 2.154 1.034 2.967z"
      />
    </svg>
  );
};
export default SunCloudSlowWind_02;

import React from "react";
const Sushi_03: React.FC<
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
        d="m4.294 16.403-2.484.878.493 1.422 2.385-.843a2.14 2.14 0 0 1-.394-1.226zM14.735 14.309v-1.596l6.963-2.461.493 1.421z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.006 9.456c0 .555-.664 1.005-1.485 1.005h-.013c-.82 0-1.485-.45-1.485-1.005s.665-1.004 1.485-1.004h.013c.82 0 1.485.45 1.485 1.004"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.041 7.023c-.94-.528-2.188-.83-3.526-.83s-2.586.302-3.526.83c-.915.513-1.695 1.342-1.695 2.433v6.947l10.442-3.69V9.456c0-1.09-.78-1.92-1.695-2.433m-1.343 1.123c-.582-.284-1.355-.447-2.183-.447s-1.601.163-2.183.447c-.566.276-1.049.723-1.049 1.31s.483 1.034 1.049 1.31c.582.285 1.355.448 2.183.448s1.6-.163 2.183-.447c.566-.277 1.049-.723 1.049-1.31s-.483-1.035-1.05-1.311"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.688 17.86c.32.469.804.841 1.317 1.112.937.495 2.179.778 3.51.778s2.573-.283 3.51-.778c.9-.476 1.71-1.264 1.71-2.338v-2.325z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m22.25 5.624-7.955 3.615-.612-1.374 7.955-3.615zM5.345 13.306l-2.983 1.356-.612-1.374 2.983-1.355z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sushi_03;

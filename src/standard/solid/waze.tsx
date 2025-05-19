import React from "react";
const Waze: React.FC<
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
        d="M17.5 8a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1M10.5 8a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.165 12.33a.75.75 0 0 1 1.004.33c.022.038.085.144.138.219.107.15.273.356.504.56.454.405 1.159.81 2.189.81s1.735-.405 2.19-.81c.23-.204.396-.41.503-.56.053-.075.116-.18.138-.22a.75.75 0 0 1 1.34.676l-.073.132c-.041.07-.102.166-.181.279-.16.224-.4.52-.731.814-.67.596-1.716 1.19-3.186 1.19s-2.515-.594-3.186-1.19a4.9 4.9 0 0 1-.912-1.093l-.073-.132a.75.75 0 0 1 .336-1.006"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.25 20a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 2.75A8.25 8.25 0 0 0 4.75 11v.041c0 .928.001 2.965-1.77 4.242.983 1.756 2.551 2.745 4.366 3.3l-.44 1.435c-2.297-.704-4.422-2.082-5.591-4.713a.75.75 0 0 1 .35-.976C3.215 13.554 3.25 12.073 3.25 11c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75c-.653 0-1.342-.014-2.047-.057l.092-1.497c.665.04 1.322.054 1.955.054a8.25 8.25 0 1 0 0-16.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m18.415 17.263.45.528c.252.295.466.66.62 1.028.15.361.265.78.265 1.18a2.75 2.75 0 1 1-5.5 0v-.821l.584-.133a8.2 8.2 0 0 0 3.02-1.373z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Waze;

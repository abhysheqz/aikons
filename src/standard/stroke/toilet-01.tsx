import React from "react";
const Toilet_01: React.FC<
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
        d="M8 11h12a6 6 0 0 1-9 5.197"
      />
      <path
        fill="currentColor"
        d="M18 22v.75a.75.75 0 0 0 .335-1.42zM4 22l-.53-.53A.75.75 0 0 0 4 22.75zm2.212-9.237a.75.75 0 0 0-1.424.474zm9.164 3.321c-.683 1.025-.624 2.426-.208 3.603.423 1.198 1.282 2.377 2.496 2.984l.671-1.342c-.786-.393-1.426-1.214-1.753-2.141-.334-.948-.274-1.797.042-2.272zM18 21.25H4v1.5h14zM4.53 22.53c1.166-1.165 3.286-4.953 1.682-9.767l-1.424.474c1.396 4.186-.484 7.398-1.318 8.233z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 12V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1M7 7h3"
      />
    </svg>
  );
};
export default Toilet_01;

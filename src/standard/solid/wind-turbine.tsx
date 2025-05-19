import React from "react";
const WindTurbine: React.FC<
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
        d="M9.75 11a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M7.818 2.931a1 1 0 0 1-.253 1.391C5.691 5.62 4.28 7.76 3.99 10.122a1 1 0 0 1-1.985-.244c.365-2.977 2.122-5.607 4.423-7.2a1 1 0 0 1 1.391.253m8.356 0a1 1 0 0 1 1.391-.253c2.302 1.593 4.058 4.223 4.424 7.2a1 1 0 1 1-1.985.244c-.29-2.362-1.702-4.502-3.577-5.8a1 1 0 0 1-.253-1.391"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 7v2.5h-2V7z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.259 1.329A1 1 0 0 1 10 1h4a1 1 0 0 1 .995 1.1l-.41 4.099A2 2 0 0 1 12.595 8h-1.19a2 2 0 0 1-1.99-1.801l-.41-4.1a1 1 0 0 1 .254-.77M15.186 12.245a2 2 0 0 1 2.528-.799l3.691 1.64a1 1 0 0 1 .462 1.41l-2 3.5a1 1 0 0 1-1.468.305l-3.279-2.46a2 2 0 0 1-.514-2.628zM8.814 12.245a2 2 0 0 0-2.528-.799l-3.691 1.64a1 1 0 0 0-.462 1.41l2 3.5a1 1 0 0 0 1.468.305l3.279-2.46a2 2 0 0 0 .515-2.628z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m8.035 12.133 2.165-1.25 1 1.732-2.165 1.25zM14.965 13.867l-2.165-1.25 1-1.732 2.165 1.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 11.5a1 1 0 0 1 1 1V22a1 1 0 1 1-2 0v-9.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 22a1 1 0 0 1-1 1H6a1 1 0 1 1 0-2h12a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WindTurbine;

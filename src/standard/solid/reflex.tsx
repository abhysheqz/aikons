import React from "react";
const Reflex: React.FC<
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
        d="M1.25 9.549C1.25 5.247 4.715 1.75 9 1.75s7.75 3.497 7.75 7.799q0 .535-.07 1.05a.75.75 0 0 1-.743.651h-5.27c-.45 0-.866.242-1.088.635l-2.616 4.642a.75.75 0 0 1-.997.299l-.3-.154c-2.62-1.259-4.416-4.028-4.416-7.123"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.293 7.793a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414l.293-.293h-8.919a1 1 0 0 0-.87.508L4.9 20.669l.935-.155a1 1 0 1 1 .329 1.972l-3 .5a1 1 0 0 1-1.093-.615l-1-2.5a1 1 0 0 1 1.857-.742l.226.565 4.9-8.67A3 3 0 0 1 10.668 9.5h8.92l-.294-.293a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Reflex;

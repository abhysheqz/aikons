import React from "react";
const Ski: React.FC<
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
        d="M16.748 4.25a2 2 0 1 1 4 0 2 2 0 0 1-4 0M5.376 3.084a.75.75 0 0 1 1.04-.208l5.994 3.996.642-.578a2.25 2.25 0 0 1 2.91-.084l1.507 1.204a.75.75 0 0 1 .272.469l.449 2.842 3.226 2.15a.75.75 0 1 1-.832 1.249l-15-10a.75.75 0 0 1-.208-1.04M10.456 8.858a.75.75 0 0 1 .59.105l2.87 1.913a.75.75 0 0 1 .114 1.154l-.374.374 1.64 1.172a1.75 1.75 0 0 1 0 2.848l-2.36 1.686a.75.75 0 0 1-.872-1.22l2.36-1.687a.25.25 0 0 0 0-.406l-2.35-1.68-1.383-.922a2.25 2.25 0 0 1-.713-2.976.75.75 0 0 1 .478-.361"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.37 11.594a.75.75 0 0 1 1.036-.225l13.745 8.836 2.202-.44a.75.75 0 0 1 .294 1.47l-2.5.5a.75.75 0 0 1-.552-.104l-14-9a.75.75 0 0 1-.226-1.037"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Ski;

import React from "react";
const RainDoubleDrop: React.FC<
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
        d="M7.419 3.342a1.88 1.88 0 0 1 2.162 0c.8.56 2.376 1.754 3.76 3.39C14.715 8.353 16 10.526 16 13.022c0 4.266-3.316 7.8-7.5 7.8S1 17.289 1 13.023c0-2.496 1.286-4.669 2.658-6.29 1.385-1.636 2.96-2.83 3.761-3.39"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.416 3.343a1.88 1.88 0 0 1 2.165-.002c.8.56 2.376 1.754 3.76 3.39C21.715 8.352 23 10.525 23 13.02c0 4.266-3.316 7.8-7.5 7.8a7 7 0 0 1-.58-.022 1 1 0 0 1 .16-1.994q.207.017.42.017c2.996 0 5.5-2.554 5.5-5.8 0-1.811-.945-3.534-2.185-4.999-1.193-1.41-2.568-2.47-3.315-2.997a19 19 0 0 0-.877.658 1 1 0 1 1-1.246-1.564c.407-.325.766-.586 1.039-.777"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RainDoubleDrop;

import React from "react";
const Tips: React.FC<
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
        d="M12.25 8a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
      />
      <path
        fill="currentColor"
        d="M14.416 2.909a5.5 5.5 0 0 0-2.937 7.341 4.25 4.25 0 1 1 2.937-7.341M17.658 14.308l-3.942 1.383a1 1 0 0 1 .017.063q.065.32.065.66c0 .395-.24.769-.627.89l-2.838.89a2.69 2.69 0 0 1-2.107-.214l-2.35-1.507.53-.844 2.306 1.48c.416.223.887.268 1.328.13l2.7-.847v-.133c-.072-.981-.822-1.767-1.755-1.767H9.821c-.37 0-.737-.095-1.069-.277l-2.281-1.251a1.7 1.7 0 0 0-.825-.214H3.25v7.073l6.945 2.336a1.75 1.75 0 0 0 1.532-.208l9.023-5.853c-.715-1.923-2.3-2.07-3.092-1.79"
      />
    </svg>
  );
};
export default Tips;

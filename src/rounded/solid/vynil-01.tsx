import React from "react";
const Vynil_01: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m8.682-6.363a1 1 0 0 1-.568 1.295 4.3 4.3 0 0 0-2.432 2.432 1 1 0 1 1-1.863-.728A6.3 6.3 0 0 1 8.636 5.07a1 1 0 0 1 1.296.567M12 14.75a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Vynil_01;

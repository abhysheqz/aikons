import React from "react";
const Orbit_02: React.FC<
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
        d="M9.25 7a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3.205A8.795 8.795 0 0 0 3.205 12c0 1.352.304 2.63.847 3.772l-1.765.84A10.7 10.7 0 0 1 1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75c-1.527 0-2.982-.319-4.3-.895l.782-1.791a8.8 8.8 0 0 0 3.518.732 8.796 8.796 0 0 0 0-17.591M15.91 12c0-.714-.191-1.38-.523-1.954l1.692-.979c.5.864.785 1.867.785 2.933a5.84 5.84 0 0 1-.789 2.938l-1.69-.98A3.9 3.9 0 0 0 15.909 12m-7.297-1.954a3.91 3.91 0 0 0 4.32 5.751l.465 1.899q-.677.166-1.398.168a5.864 5.864 0 0 1-5.079-8.797z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.25 16a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M2.575 15.648a2.75 2.75 0 1 1 2.85 4.704 2.75 2.75 0 0 1-2.85-4.704"
      />
    </svg>
  );
};
export default Orbit_02;

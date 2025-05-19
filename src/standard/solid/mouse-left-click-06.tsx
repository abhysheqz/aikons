import React from "react";
const MouseLeftClick_06: React.FC<
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
        d="M4.053 1.106a1 1 0 0 1 1.342.447l.5 1a1 1 0 0 1-1.79.894l-.5-1a1 1 0 0 1 .448-1.341m.842 3.947a1 1 0 0 1-.448 1.342l-1 .5a1 1 0 1 1-.894-1.79l1-.5a1 1 0 0 1 1.342.448M13.5 1c-3.298 0-5.518 1.267-6.85 3.414C5.375 6.47 5 9.202 5 12s.375 5.53 1.65 7.586C7.982 21.733 10.202 23 13.5 23s5.518-1.267 6.85-3.414C21.625 17.53 22 14.798 22 12s-.375-5.53-1.65-7.586C19.018 2.267 16.797 1 13.5 1M7.018 11c.086-2.254.48-4.159 1.332-5.532.798-1.287 2.059-2.202 4.15-2.419v1.514A2 2 0 0 0 11 6.5V8a2 2 0 0 0 1.5 1.937V11zm12.964 0c-.086-2.254-.48-4.159-1.332-5.532-.798-1.287-2.058-2.202-4.15-2.419v1.514A2 2 0 0 1 16 6.5V8a2 2 0 0 1-1.5 1.937V11z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MouseLeftClick_06;

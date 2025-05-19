import React from "react";
const DragLeft_04: React.FC<
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
        d="M12.18 3.15c1.597 0 2.892 1.276 2.892 2.85s-1.295 2.85-2.892 2.85v1.9C14.842 10.75 17 8.623 17 6s-2.158-4.75-4.82-4.75c-2.333 0-4.279 1.632-4.725 3.8H4.693l.764-.753-1.364-1.344L1.001 6l3.092 3.047 1.364-1.344-.764-.753h4.594V6c0-1.574 1.295-2.85 2.893-2.85"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.832 14.125a1.396 1.396 0 0 0-2.035.109 1.29 1.29 0 0 0-.026 1.614l.012.016 4.26 6.886h9.306c1.478 0 2.65-1.132 2.65-2.497v-6.27c0-.567-.488-1.05-1.123-1.05H20.66v1.506h-.808v-1.421a1 1 0 0 0-.062-.346c-.15-.403-.563-.704-1.061-.704l-1.216.002v1.936h-.808v-1.853a1 1 0 0 0-.062-.346c-.15-.403-.563-.704-1.06-.704h-1.217v1.939h-.807V5.508a1.258 1.258 0 1 0-2.516 0v10.935z"
      />
    </svg>
  );
};
export default DragLeft_04;

import React from "react";
const KnightShield: React.FC<
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
        d="M13.251 1.56a2.68 2.68 0 0 0-2.502 0c-1.16.616-3.535 1.723-6.38 2.219C3.2 3.983 2.25 4.987 2.25 6.257v4.816c0 3.501 1.782 6.167 3.724 8.026 1.938 1.856 4.11 2.985 5.098 3.445a2.19 2.19 0 0 0 1.856 0c.988-.46 3.16-1.589 5.098-3.445 1.942-1.86 3.724-4.525 3.724-8.026V6.257c0-1.27-.95-2.274-2.12-2.478-2.844-.496-5.22-1.603-6.379-2.218m-1.59 1.728a.73.73 0 0 1 .678 0 24.8 24.8 0 0 0 5 1.979L6.185 16.447C5.026 14.989 4.2 13.205 4.2 11.073V6.257c0-.245.192-.498.503-.552 3.123-.544 5.701-1.75 6.958-2.417"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default KnightShield;

import React from "react";
const FrenchFries_02: React.FC<
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
        d="M3 9.25a.75.75 0 0 0-.728.932l3 12A.75.75 0 0 0 6 22.75h12a.75.75 0 0 0 .728-.568l3-12A.75.75 0 0 0 21 9.25h-1.84c-1.151 0-2.235.552-3.072 1.29a6.26 6.26 0 0 0-1.615 2.21H9.527a6.26 6.26 0 0 0-1.615-2.21c-.837-.738-1.92-1.29-3.073-1.29zM11.008 18h2v-2h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14 9.013V1.25h-4v6.196L7 2.25l-3.465 2 2.052 3.554c1.315.19 2.46.856 3.316 1.61a8 8 0 0 1 1.537 1.836h3.12a8 8 0 0 1 1.537-1.836C16.11 8.52 17.533 7.75 19.16 7.75h.186l.866-1.5-3.464-2z"
      />
    </svg>
  );
};
export default FrenchFries_02;

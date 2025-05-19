import React from "react";
const EraserAuto: React.FC<
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
        d="M16.53 6.97a.75.75 0 0 0-1.06 0l-3.72 3.72 6.56 6.56 3.72-3.72a.75.75 0 0 0 0-1.06zM17.25 18.311l-6.561-6.56-5.22 5.219a.75.75 0 0 0 0 1.06l4.22 4.22h3.622z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.945 1.75h1.989l3.195 7.455-1.379.59-.877-2.045H4.005L3.13 9.795l-1.379-.59zm-.297 4.5h2.583l-1.286-3h-.011z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EraserAuto;

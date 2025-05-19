import React from "react";
const RollingPin: React.FC<
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
        d="M13.669 3.77c.672-.672 1.718-1.002 2.696-.575.754.33 1.78.89 2.665 1.775s1.445 1.911 1.774 2.665c.428.978.098 2.024-.574 2.696L10.33 20.23c-.672.672-1.718 1.002-2.696.575-.754-.33-1.78-.89-2.665-1.775s-1.445-1.911-1.775-2.665c-.427-.978-.097-2.024.575-2.696z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M22.08 1.92a2.29 2.29 0 0 0-3.24 0 5.5 5.5 0 0 0-.613.783c.566.347 1.165.79 1.723 1.347.557.558 1 1.157 1.347 1.723.315-.211.596-.428.782-.614a2.29 2.29 0 0 0 0-3.238M2.703 18.227c.347.566.79 1.165 1.347 1.723.558.557 1.157 1 1.723 1.347a5.5 5.5 0 0 1-.614.782 2.29 2.29 0 1 1-3.238-3.238c.186-.186.467-.403.782-.614"
      />
    </svg>
  );
};
export default RollingPin;

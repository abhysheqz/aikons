import React from "react";
const Blood: React.FC<
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
        d="m7.058 1.376.192-.126.192.126c.292.19.797.521 1 .671.524.39 1.225.957 1.929 1.665.361.365.731.774 1.08 1.222-.486.401-1.012.869-1.54 1.394-1.864 1.855-4.161 4.834-4.161 8.501q0 .37.028.733c-2.612-.68-4.528-3.13-4.528-6.02 0-2.39 1.495-4.435 2.88-5.83a17 17 0 0 1 1.928-1.665c.203-.15.708-.48 1-.671"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.752 4.41 15 4.25l.248.16c.378.244 1.03.666 1.291.857.678.497 1.583 1.22 2.492 2.124 1.788 1.78 3.719 4.39 3.719 7.438 0 4.352-3.448 7.92-7.75 7.92s-7.75-3.568-7.75-7.92c0-3.048 1.93-5.658 3.72-7.438a22 22 0 0 1 2.49-2.124c.262-.191.914-.613 1.292-.857M17.5 15.5c0 .859-.28 1.31-.582 1.563-.331.28-.828.437-1.418.437v2c.91 0 1.913-.238 2.707-.907.823-.694 1.293-1.743 1.293-3.093z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Blood;

import React from "react";
const LegalHammer: React.FC<
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
        d="M13.166 1.539a2.5 2.5 0 0 0-2.332 0C9.632 2.175 7.17 3.32 4.216 3.834c-1.089.19-1.966 1.12-1.966 2.29v4.927c0 3.49 1.78 6.158 3.742 8.032 1.96 1.873 4.16 3.015 5.161 3.479a2 2 0 0 0 1.694 0c1.001-.465 3.2-1.606 5.16-3.479 1.963-1.874 3.743-4.541 3.743-8.032V6.123c0-1.168-.877-2.1-1.966-2.289-2.954-.513-5.416-1.659-6.618-2.295m-.459 5.254a1 1 0 0 0-1.414 0l-2.5 2.5a1 1 0 0 0 0 1.414L10.086 12l-1.793 1.793a1 1 0 1 0 1.414 1.414l1.793-1.793 1.293 1.293a1 1 0 0 0 1.414 0l2.5-2.5a1 1 0 0 0 0-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LegalHammer;

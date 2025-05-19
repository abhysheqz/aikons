import React from "react";
const Stethoscope: React.FC<
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
        d="M9 13a1 1 0 0 1 1 1v3.5a3.5 3.5 0 0 0 7 0V16a1 1 0 1 1 2 0v1.5a5.5 5.5 0 0 1-11 0V14a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4 4.08C4 3.446 4.484 3 4.998 3a1 1 0 1 0 0-2C3.305 1 2 2.417 2 4.08l-.001.172c-.006.85-.014 2.075 1.048 3.05l1.385 3.47c.295.739.518 1.298.898 1.769s.88.807 1.54 1.25L8.41 14.83a1 1 0 0 0 1.11.006l1.57-1.036c.673-.444 1.185-.781 1.573-1.258.388-.476.616-1.045.915-1.795L14.954 7.3c1.06-.974 1.052-2.198 1.046-3.048V4.08C16 2.417 14.694 1 13 1a1 1 0 1 0 0 2c.515 0 1 .446 1 1.08 0 1.046-.017 1.4-.405 1.752-1.275 1.161-2.161 1.966-2.912 2.492C9.953 8.834 9.465 9 9 9s-.955-.166-1.683-.676c-.751-.526-1.638-1.33-2.913-2.492C4.017 5.48 4 5.126 4 4.08"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 9a4 4 0 1 0 0 8 4 4 0 0 0 0-8m.007 5.5c.824 0 1.493-.672 1.493-1.5s-.669-1.5-1.493-1.5h-.014c-.824 0-1.493.672-1.493 1.5s.669 1.5 1.493 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Stethoscope;

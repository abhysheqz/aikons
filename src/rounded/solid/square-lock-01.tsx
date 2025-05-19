import React from "react";
const SquareLock_01: React.FC<
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
        d="M12 3.25a3.5 3.5 0 0 0-3.5 3.5v1.56c1.118-.04 2.265-.06 3.5-.06s2.382.02 3.5.06V6.75a3.5 3.5 0 0 0-3.5-3.5m-5.5 3.5v1.777a4.3 4.3 0 0 0-2.975 3.528c-.149 1.1-.275 2.257-.275 3.445s.126 2.344.275 3.445c.271 2.017 1.942 3.61 4 3.705 1.429.066 2.88.1 4.475.1 1.596 0 3.046-.034 4.475-.1 2.058-.095 3.729-1.688 4-3.705.149-1.1.275-2.257.275-3.445s-.126-2.344-.274-3.445A4.3 4.3 0 0 0 17.5 8.527V6.75a5.5 5.5 0 1 0-11 0M11.993 14c-.824 0-1.493.672-1.493 1.5s.669 1.5 1.493 1.5h.014c.824 0 1.493-.672 1.493-1.5s-.669-1.5-1.493-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareLock_01;

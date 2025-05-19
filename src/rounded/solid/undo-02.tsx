import React from "react";
const Undo_02: React.FC<
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
        d="M4 3a1 1 0 1 0-2 0v1.35c0 1.035 0 1.916.098 2.61.105.737.343 1.443.963 1.968s1.356.644 2.1.626c.7-.017 1.57-.162 2.59-.332l.071-.012 1.342-.224a1 1 0 1 0-.328-1.972l-1.343.223c-.953.16-1.625.27-2.138.306A8 8 0 1 1 11.999 20a1 1 0 1 0 0 2c5.523 0 10-4.477 10-10S17.522 2 12 2a9.99 9.99 0 0 0-7.98 3.972C4.002 5.527 4 4.978 4 4.278z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Undo_02;

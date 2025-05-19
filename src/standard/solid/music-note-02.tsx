import React from "react";
const MusicNote_02: React.FC<
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
        d="M2 17.191a5 5 0 1 1 10 0 5 5 0 0 1-10 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 9.761c.367.3.757.593 1.163.863 1.107.736 2.45 1.38 3.84 1.376 1.745-.007 3.05-.766 3.88-1.957C21.684 8.9 22 7.429 22 6a1 1 0 0 0-1.316-.949c-1.039.346-2.493.27-4.054-.155-1.54-.42-3.044-1.144-4.12-1.927a1.59 1.59 0 0 0-1.6-.152c-.469.214-.91.702-.91 1.39V17a1 1 0 0 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MusicNote_02;

import React from "react";
const Avocado: React.FC<
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
        d="M12.813 4.311a3.4 3.4 0 0 1 .263-.861c.229-.476.518-.7.924-.7v-1.5c-1.194 0-1.905.776-2.276 1.55a5 5 0 0 0-.426 1.495C8.865 4.612 6.917 6.553 6.917 9c0 1.136-.262 2.328-.88 3.16A6.4 6.4 0 0 0 4.75 16c0 3.783 3.303 6.75 7.25 6.75s7.25-2.967 7.25-6.75c0-1.43-.478-2.754-1.287-3.84-.618-.832-.88-2.024-.88-3.16 0-2.41-1.889-4.328-4.27-4.689M11.25 12.25H12a3.75 3.75 0 1 1 0 7.5h-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Avocado;

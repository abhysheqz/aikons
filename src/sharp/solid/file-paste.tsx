import React from "react";
const FilePaste: React.FC<
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
        d="m9.079 2.664-2 2h6.585v6h-2v-4H7.08l2 2-1.415 1.414L4.25 6.664h-.086v-.086l-.914-.914.914-.914v-.086h.086L7.664 1.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m10.096 3.414.75-.75L9.432 1.25H20.75v14.12l-7.39 7.38H3.252V7.432l4.413 4.414 2.75-2.75v2.818h4.5v-8.5zm2.466 17.38L18.8 14.54h-6.237z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FilePaste;

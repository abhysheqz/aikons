import React from "react";
const AddCircleHalfDot: React.FC<
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
        d="M11 2a1 1 0 0 1 1-1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12a1 1 0 1 1 2 0 9 9 0 1 0 9-9 1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 7a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H8a1 1 0 1 1 0-2h3V8a1 1 0 0 1 1-1M9.416 2.1A1 1 0 0 1 8.9 3.416c-.757.331-1.469.748-2.123 1.24a1 1 0 0 1-1.2-1.6A12.6 12.6 0 0 1 8.1 1.584a1 1 0 0 1 1.316.516m-4.96 3.277a1 1 0 0 1 .2 1.4A10.6 10.6 0 0 0 3.415 8.9a1 1 0 0 1-1.832-.8 12.6 12.6 0 0 1 1.473-2.524 1 1 0 0 1 1.4-.199"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AddCircleHalfDot;

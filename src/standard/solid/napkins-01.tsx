import React from "react";
const Napkins_01: React.FC<
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
        d="M5.25 3.03a1.78 1.78 0 0 1 3.124-1.169L21.297 16.7a1.841 1.841 0 0 1-1.388 3.051H8A2.75 2.75 0 0 1 5.25 17zm1.78-.28a.28.28 0 0 0-.28.28V17c0 .69.56 1.25 1.25 1.25h11.909a.341.341 0 0 0 .257-.566l-1.685-1.934H10a.75.75 0 0 1-.75-.75V5.151L7.243 2.846a.28.28 0 0 0-.212-.096M2.25 6.03c0-.973.78-1.764 1.75-1.78V17a4 4 0 0 0 4 4h10.748a1.84 1.84 0 0 1-1.84 1.75H5A2.75 2.75 0 0 1 2.25 20z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Napkins_01;

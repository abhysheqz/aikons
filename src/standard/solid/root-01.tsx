import React from "react";
const Root_01: React.FC<
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
        d="M13.35 11a1 1 0 0 1 1-1h.885c.946 0 1.769.572 2.158 1.406l.34.728 1.024-1.254a2.36 2.36 0 0 1 1.828-.88H21a1 1 0 1 1 0 2h-.415c-.09 0-.194.04-.279.145l-1.634 2.001.747 1.602c.085.182.232.252.346.252h.885a1 1 0 1 1 0 2h-.885c-.946 0-1.769-.572-2.158-1.406l-.34-.728-1.024 1.254c-.447.547-1.11.88-1.828.88H14a1 1 0 1 1 0-2h.415c.09 0 .194-.04.279-.145l.774.633-.774-.633 1.634-2.001-.747-1.602c-.085-.182-.232-.252-.346-.252h-.885a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.825 5.388A2 2 0 0 1 12.729 4H22a1 1 0 0 1 0 2h-9.271L8.452 19.306a1 1 0 0 1-1.816.198l-2.846-4.88-1.083 1.083a1 1 0 0 1-1.414-1.414l1.083-1.083a2 2 0 0 1 3.141.407l1.717 2.942z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Root_01;

import React from "react";
const DragRight_04: React.FC<
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
        d="M9.571 3.15C7.974 3.15 6.68 4.426 6.68 6S7.974 8.85 9.57 8.85v1.9C6.91 10.75 4.75 8.623 4.75 6s2.159-4.75 4.821-4.75c2.333 0 4.279 1.632 4.725 3.8h2.762l-.764-.753 1.363-1.344L20.75 6l-3.093 3.047-1.363-1.344.764-.753h-4.594V6c0-1.574-1.295-2.85-2.893-2.85"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.583 14.125a1.396 1.396 0 0 0-2.035.109 1.29 1.29 0 0 0-.026 1.614l.012.016 4.26 6.886h9.305c1.479 0 2.651-1.132 2.651-2.497v-6.27c0-.567-.489-1.05-1.123-1.05H17.41v1.506h-.808v-1.421a1 1 0 0 0-.062-.346c-.15-.403-.563-.704-1.061-.704l-1.216.002v1.936h-.808v-1.853a1 1 0 0 0-.062-.346c-.15-.403-.563-.704-1.061-.704h-1.216v1.938h-.808V5.509a1.258 1.258 0 1 0-2.516 0v10.935z"
      />
    </svg>
  );
};
export default DragRight_04;

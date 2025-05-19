import React from "react";
const Award_05: React.FC<
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
        d="M12 1.25a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5m-1.536 11.628 5.705-5.134-1.338-1.487-4.295 3.865-1.329-1.329-1.414 1.415z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 20.132V14.75H6v7a1 1 0 0 0 1.447.894L12 20.368l4.553 2.277A1 1 0 0 0 18 21.75v-7h-2v5.382l-3.553-1.776a1 1 0 0 0-.894 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Award_05;

import React from "react";
const FolderFavourite: React.FC<
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
        d="M21.336 14.081c-1.796-.951-3.086.451-3.086.451s-1.29-1.402-3.086-.451c-2.176 1.152-2.332 5.665 3.086 7.669 5.418-2.004 5.262-6.517 3.086-7.669"
      />
      <path
        fill="currentColor"
        d="M12.391 6.244 9.898 2.945a1.75 1.75 0 0 0-1.396-.695H3A1.75 1.75 0 0 0 1.25 4v15A2.75 2.75 0 0 0 4 21.75h11.5c-1.575-1.071-2.514-2.437-2.856-3.861-.47-1.954.238-4.014 1.935-4.913 1.288-.682 2.461-.528 3.29-.177q.206.088.381.186.175-.098.382-.186c.828-.351 2-.505 3.29.177.309.164.585.367.828.6V8.995A2.75 2.75 0 0 0 20 6.244z"
      />
    </svg>
  );
};
export default FolderFavourite;

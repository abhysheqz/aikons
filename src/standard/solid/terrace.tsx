import React from "react";
const Terrace: React.FC<
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
        d="M12.64 1.232a1 1 0 0 0-1.28 0c-2.93 2.442-5.368 3.906-8.856 5.9A1 1 0 0 0 2 8v2a1 1 0 0 0 1 1h8v3H9a1 1 0 1 0 0 2h2v5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2v-5h2a1 1 0 1 0 0-2h-2v-3h8a1 1 0 0 0 1-1V8a1 1 0 0 0-.504-.868c-3.488-1.994-5.926-3.458-8.856-5.9M3.98 13.804a1 1 0 1 0-1.96.392l.948 4.74-.916 2.748a1 1 0 0 0 1.897.632L4.721 20H6.28l.772 2.316a1 1 0 0 0 1.897-.632l-1-3A1 1 0 0 0 7 18H4.82zm16.04 0a1 1 0 0 1 1.96.392l-.948 4.74.916 2.748a1 1 0 1 1-1.897.632L19.279 20h-1.558l-.773 2.316a1 1 0 1 1-1.897-.632l1-3A1 1 0 0 1 17 18h2.18z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Terrace;

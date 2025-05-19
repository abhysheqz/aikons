import React from "react";
const QuillWrite_02: React.FC<
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
        d="M1 5.905A3.905 3.905 0 0 1 4.905 2h4.393a.976.976 0 0 1 0 1.952H4.905a1.95 1.95 0 0 0-1.953 1.953v12.69c0 1.079.874 1.953 1.953 1.953h12.69a1.95 1.95 0 0 0 1.953-1.953v-4.88a.976.976 0 1 1 1.952 0v4.88a3.905 3.905 0 0 1-3.905 3.905H4.905A3.905 3.905 0 0 1 1 18.595z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.105 4.302c-1.57 1.935-2.02 4.557-2.093 7.482q-1.242 2.06-2.198 4.615a1 1 0 0 0 1.873.702 27 27 0 0 1 1.652-3.619c2.68-.158 6.72-1.392 9.033-4.812a.75.75 0 0 0-.172-1.02l-.872-.654c1.33-.608 2.131-1.487 2.593-2.41.58-1.16.58-2.305.58-2.82V1.75a.75.75 0 0 0-.75-.75c-4.843 0-7.874 1.12-9.646 3.302"
      />
    </svg>
  );
};
export default QuillWrite_02;

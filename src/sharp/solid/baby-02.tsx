import React from "react";
const Baby_02: React.FC<
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
        d="M10.073 12.826c-.816-.243-1.645-.682-2.453-1.39l-.636-.557-.477.698a7.26 7.26 0 0 0-1.257 4.108c0 3.865 2.986 7.065 6.75 7.065 2.62 0 4.868-1.556 5.988-3.8a21.8 21.8 0 0 1-4.656-2.773c-1.221-.956-2.366-2.082-3.26-3.351m8.441 4.717a7.4 7.4 0 0 0 .236-1.858 7.26 7.26 0 0 0-1.257-4.108l-.46-.674-.634.517c-.751.614-2.122 1.37-3.72 1.59q-.25.033-.506.05a16 16 0 0 0 2.084 1.936 20.3 20.3 0 0 0 4.257 2.547"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.302 4.004A4.821 4.821 0 1 0 12 3.179c-.452 0-.771.349-.771.723s.32.723.771.723a.8.8 0 0 0 .524-.193l1.266 1.455a2.72 2.72 0 0 1-1.79.667c-1.432 0-2.643-1.11-2.698-2.55M12 1.25a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.25 7.25h1.508v1.5H9.25zm4 0h1.508v1.5H13.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Baby_02;

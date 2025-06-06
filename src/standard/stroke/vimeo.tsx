import React from "react";
const Vimeo: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.08 4.033C6.256 3.663 3 6.502 2 7.502l1 2 3-2c.258.812 1.764 8.43 3.604 10.937.624.953 2.304 2.895 5.29.169 2.939-2.682 5.863-7.164 6.75-10.438.516-1.38.86-4.05-1.933-4.137-2.602-.082-4.669 2.15-5.141 3.142 2.442.007 3.316 1.687 1.39 4.936-1.974 3.327-3.749 1.413-4.137.166l-.72-2.624C10.74 8.33 10.61 6.915 9.977 5.7c-.41-.788-1.04-1.494-1.897-1.667Z"
      />
    </svg>
  );
};
export default Vimeo;

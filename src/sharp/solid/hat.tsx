import React from "react";
const Hat: React.FC<
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
        d="M8.184 4.25a3.75 3.75 0 0 0-3.727 3.336l-.462 4.16 1.053.368c1.415.503 4.007.885 6.95.885s5.537-.382 6.951-.885l1.05-.372-.458-4.156a3.75 3.75 0 0 0-3.727-3.336zm2.065 5h3.5v1.5h-3.5zm12.102 8.412.398-.211v-1.214l-2.498-3.122-.503.179c-1.591.564-4.715.956-7.75.956s-6.158-.392-7.748-.956l-.503-.179-2.498 3.122v1.214l.397.211C4.071 18.954 7.835 19.75 12 19.75s7.928-.796 10.352-2.088"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hat;

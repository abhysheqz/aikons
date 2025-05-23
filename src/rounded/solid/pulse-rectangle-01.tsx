import React from "react";
const PulseRectangle_01: React.FC<
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
        d="M17.038 2.421c-1.276-.171-3.022-.171-5.095-.171s-3.705 0-4.98.171c-1.31.176-2.354.545-3.175 1.367-.822.821-1.19 1.866-1.367 3.174-.171 1.276-.171 3.022-.171 5.095s0 3.705.171 4.98c.176 1.31.545 2.354 1.367 3.175.821.822 1.866 1.19 3.174 1.367 1.276.171 3.022.171 5.095.171s3.705 0 4.98-.171c1.31-.176 2.354-.545 3.175-1.367.822-.821 1.19-1.866 1.367-3.174.171-1.276.171-2.908.171-4.981s0-3.82-.171-5.095c-.176-1.308-.545-2.353-1.367-3.174-.821-.822-1.866-1.19-3.174-1.367m-3.81 5.397a.75.75 0 0 0-1.44-.055L10.5 11.628l-.788-2.365a.75.75 0 0 0-1.355-.149L7.075 11.25H5.5a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 .643-.364l.661-1.102.984 2.953a.75.75 0 0 0 1.423 0l1.186-3.556 1.375 5.5a.75.75 0 0 0 1.399.154l1.793-3.585H18.5a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0-.67.415l-1.094 2.186z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PulseRectangle_01;

import React from "react";
const Medal_02: React.FC<
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
        d="M12 12.25c.703 0 1.185.527 1.451 1.067l.789 1.59a.3.3 0 0 0 .105.078l1.424.239c.592.1 1.21.412 1.42 1.065.207.653-.116 1.267-.54 1.693l-1.108 1.116a.3.3 0 0 0-.04.144l.317 1.381c.14.613.143 1.422-.477 1.878-.624.458-1.395.207-1.934-.114l-1.337-.797a.3.3 0 0 0-.142.001l-1.334.796c-.54.323-1.31.57-1.932.112-.62-.456-.62-1.262-.48-1.876l.318-1.381a.3.3 0 0 0-.04-.144L7.35 17.98c-.42-.425-.742-1.038-.536-1.69.207-.653.826-.967 1.418-1.066l1.42-.238a.3.3 0 0 0 .105-.078l.79-1.593c.268-.539.75-1.065 1.453-1.065"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.101 1.306c-.3-.056-.64-.056-1.114-.056H6.014c-.474 0-.815 0-1.114.056a3.26 3.26 0 0 0-2.594 2.61c-.063.338-.06.686-.057 1.03l.002.22c0 .492 0 .807.037 1.105.163 1.3.85 2.478 1.902 3.254.24.179.515.332.941.57l.047.026 2.604 1.458c.922.516 1.66.929 2.298 1.21.66.29 1.262.461 1.92.461.659 0 1.262-.172 1.922-.462.637-.28 1.375-.693 2.297-1.21l2.65-1.482c.427-.239.701-.392.942-.57a4.79 4.79 0 0 0 1.902-3.255c.042-.336.04-.676.038-1.015v-.22c0-.478 0-.82-.056-1.12a3.26 3.26 0 0 0-2.594-2.61M8.75 5a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zm4 0a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zm4 0a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Medal_02;

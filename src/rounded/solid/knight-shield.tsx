import React from "react";
const KnightShield: React.FC<
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
        d="M12 1.25c-.392 0-.78.12-1.144.258-.37.14-.83.344-1.39.594-.825.366-1.929.793-3.094 1.125-.85.242-1.555.443-2.093.652-.54.21-1.073.486-1.438.97-.351.466-.479 1.002-.536 1.544-.055.518-.055 1.163-.055 1.92v2.889c0 3.066 1.382 5.49 3.035 7.285 1.647 1.788 3.676 3.039 4.961 3.719.535.283 1.027.544 1.754.544s1.219-.26 1.754-.544c1.285-.68 3.314-1.93 4.96-3.719 1.654-1.795 3.036-4.22 3.036-7.285V8.313c0-.757 0-1.402-.055-1.92-.057-.542-.185-1.078-.536-1.544-.365-.484-.898-.76-1.438-.97-.538-.209-1.242-.41-2.093-.652a24 24 0 0 1-3.093-1.125c-.561-.25-1.02-.454-1.39-.594-.365-.138-.753-.258-1.145-.258M10.229 3.9a28 28 0 0 1 1.315-.563c.324-.123.435-.132.456-.132s.132.01.456.132c.312.118.72.299 1.315.564.89.396 2.007.831 3.277 1.193l.36.103L6.146 16.49C5.005 15.05 4.2 13.297 4.2 11.2V8.366c0-.823.001-1.363.044-1.766.041-.39.11-.516.153-.572.029-.039.139-.151.587-.326.443-.172 1.058-.348 1.968-.607A25 25 0 0 0 10.23 3.9"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default KnightShield;

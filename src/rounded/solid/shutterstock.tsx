import React from "react";
const Shutterstock: React.FC<
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
        d="M12.057 1.75h-.114c-2.19 0-3.912 0-5.255.18-1.377.186-2.469.573-3.327 1.43-.858.86-1.245 1.951-1.43 3.328-.181 1.343-.181 3.064-.181 5.255v.114c0 2.19 0 3.912.18 5.255.186 1.377.573 2.469 1.43 3.327.86.858 1.951 1.245 3.328 1.43 1.343.181 3.064.181 5.255.181h.114c2.19 0 3.912 0 5.255-.18 1.377-.186 2.469-.573 3.327-1.43.858-.86 1.245-1.951 1.43-3.328.181-1.343.181-3.064.181-5.255v-.114c0-2.19 0-3.912-.18-5.255-.186-1.377-.573-2.469-1.43-3.327-.86-.858-1.951-1.245-3.328-1.43-1.343-.181-3.064-.181-5.255-.181M10 5h-.066c-.886 0-1.65 0-2.262.082-.655.088-1.284.287-1.793.797-.51.51-.709 1.138-.797 1.793C5 8.284 5 9.048 5 9.934V11a1 1 0 1 0 2 0v-1c0-.971.002-1.599.064-2.061.059-.434.153-.57.229-.646s.212-.17.646-.229C8.4 7.002 9.029 7 10 7h1a1 1 0 1 0 0-2zm9 8a1 1 0 1 0-2 0v1c0 .971-.002 1.599-.064 2.061-.059.434-.153.57-.229.646s-.212.17-.646.229C15.6 16.998 14.971 17 14 17h-1a1 1 0 1 0 0 2h1.066c.886 0 1.65 0 2.262-.082.655-.088 1.284-.287 1.793-.797.51-.51.709-1.138.797-1.793.082-.612.082-1.376.082-2.262z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Shutterstock;

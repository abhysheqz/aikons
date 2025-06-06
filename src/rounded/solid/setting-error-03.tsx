import React from "react";
const SettingError_03: React.FC<
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
        d="M17 11.25a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5m.75 3.75a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zM17 18.25a.75.75 0 0 0 0 1.5h.009a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.824 1.257a2.4 2.4 0 0 1 .352 0c.503.037.911.265 1.284.556.35.275.739.663 1.193 1.117l.702.627s.466.077 1.112.077c.712 0 1.32 0 1.805.065.519.07 1.01.226 1.406.623.397.397.553.887.623 1.406.065.486.065 1.093.065 1.805l.053 1.054.651.76c.454.454.842.842 1.117 1.193.291.373.519.78.556 1.284a2.3 2.3 0 0 1 0 .352 2 2 0 0 1-.053.33A7.24 7.24 0 0 0 17 9.75q-.678 0-1.321.12a4.25 4.25 0 1 0-5.808 5.808q-.12.645-.121 1.322a7.24 7.24 0 0 0 2.756 5.69 2 2 0 0 1-.33.053 2.3 2.3 0 0 1-.352 0c-.503-.037-.911-.264-1.284-.556-.35-.275-.739-.663-1.193-1.117l-.76-.65-1.054-.054c-.712 0-1.32 0-1.805-.065-.519-.07-1.01-.226-1.406-.623-.397-.397-.553-.887-.623-1.406-.065-.486-.065-1.093-.065-1.805l-.053-1.054-.651-.76c-.454-.454-.842-.842-1.117-1.193-.291-.373-.519-.78-.556-1.284a2.4 2.4 0 0 1 0-.352c.037-.503.265-.911.556-1.284.275-.35.663-.739 1.117-1.193l.65-.76.054-1.054c0-.712 0-1.32.065-1.805.07-.519.226-1.01.623-1.406.397-.397.887-.553 1.406-.623.486-.065 1.093-.065 1.805-.065.646 0 1.054-.053 1.054-.053l.76-.651c.454-.454.842-.842 1.193-1.117.373-.291.78-.519 1.284-.556"
      />
    </svg>
  );
};
export default SettingError_03;

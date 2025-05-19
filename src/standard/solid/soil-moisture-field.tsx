import React from "react";
const SoilMoistureField: React.FC<
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
        d="M4.257 2.04c.608.042 1.147.13 1.656.34A5 5 0 0 1 8.62 5.088c.212.51.3 1.048.34 1.656C9 7.335 9 8.063 9 8.964V9a1 1 0 0 1-1 1h-.036c-.901 0-1.629 0-2.22-.04-.61-.042-1.148-.13-1.657-.34A5 5 0 0 1 1.38 6.912c-.212-.51-.3-1.048-.34-1.656C1 4.665 1 3.937 1 3.036V3a1 1 0 0 1 1-1h.036c.901 0 1.629 0 2.22.04"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.966 4H12a1 1 0 0 1 1 1v.034c0 .592 0 1.087-.028 1.493-.028.423-.09.822-.251 1.21a3.67 3.67 0 0 1-1.985 1.984c-.387.16-.786.222-1.209.251-.406.028-.9.028-1.493.028H8a1 1 0 0 1-1-1v-.034c0-.592 0-1.087.028-1.493.029-.423.09-.822.251-1.21A3.67 3.67 0 0 1 9.263 4.28c.388-.16.787-.222 1.21-.251.406-.028.9-.028 1.493-.028"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 8a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 14a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1M13 17a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1M13 20a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.032 14.414a.75.75 0 0 1 .936 0l.002.001.002.002.007.006.025.02a9 9 0 0 1 .388.336c.247.222.579.537.913.905.332.365.68.798.951 1.258.263.448.494.992.494 1.561 0 1.582-1.222 3.247-3.25 3.247s-3.25-1.665-3.25-3.247c0-.569.23-1.113.494-1.561.27-.46.62-.893.95-1.258a13 13 0 0 1 1.302-1.241l.025-.02.007-.006.002-.002z"
      />
    </svg>
  );
};
export default SoilMoistureField;

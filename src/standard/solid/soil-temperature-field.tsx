import React from "react";
const SoilTemperatureField: React.FC<
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
        d="M5.257 2.04c.608.042 1.147.13 1.656.34A5 5 0 0 1 9.62 5.088c.212.51.3 1.048.34 1.656.041.592.041 1.32.041 2.221V9a1 1 0 0 1-1 1h-.036c-.901 0-1.629 0-2.22-.04-.61-.042-1.148-.13-1.657-.34A5 5 0 0 1 2.38 6.912c-.212-.51-.3-1.048-.34-1.656C2 4.665 2 3.937 2 3.036V3a1 1 0 0 1 1-1h.036c.901 0 1.629 0 2.22.04"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.966 4H13a1 1 0 0 1 1 1v.034c0 .592 0 1.087-.028 1.493-.028.423-.09.822-.251 1.21a3.67 3.67 0 0 1-1.985 1.984c-.387.16-.786.222-1.209.251-.406.028-.9.028-1.493.028H9a1 1 0 0 1-1-1v-.034c0-.592 0-1.087.028-1.493.029-.423.09-.822.251-1.21a3.67 3.67 0 0 1 1.985-1.984c.387-.16.786-.222 1.209-.251.406-.028.9-.028 1.493-.028"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 8a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 14a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1M14 17a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1M14 20a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19 21a3 3 0 0 0 1.5-5.599V10.5a1.5 1.5 0 0 0-3 0v4.901A2.999 2.999 0 0 0 19 21"
      />
    </svg>
  );
};
export default SoilTemperatureField;

import React from "react";
const TimeSchedule: React.FC<
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
        d="M12 7a1 1 0 0 1 1 1v3.586l1.207 1.207a1 1 0 0 1-1.414 1.414l-1.5-1.5A1 1 0 0 1 11 12V8a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m18.742 15.167 1.215.656c.771.417 1.427.771 1.883 1.118.479.363.91.848.91 1.559 0 .71-.431 1.196-.91 1.56-.456.346-1.112.7-1.883 1.117l-1.215.656c-.59.318-1.093.59-1.487.746a2.3 2.3 0 0 1-.67.168 1.15 1.15 0 0 1-.815-.246c-.416-.34-.533-.807-.519-1.21.014-.377.14-.747.269-1.047.134-.31.3-.606.44-.846q.085-.145.15-.252a6 6 0 0 0 .163-.285c.123-.239.131-.326.131-.363s-.01-.123-.13-.36a6 6 0 0 0-.165-.284l-.149-.252a8 8 0 0 1-.44-.846c-.13-.3-.255-.67-.269-1.048-.014-.402.103-.869.519-1.209.26-.212.56-.262.814-.246.236.015.467.088.67.168.395.156.899.428 1.488.746"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3.205a8.795 8.795 0 1 0 .904 17.545.977.977 0 1 1 .198 1.944q-.544.056-1.102.056C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25 22.75 6.063 22.75 12c0 .735-.074 1.454-.215 2.149a.977.977 0 0 1-1.916-.389A8.795 8.795 0 0 0 12 3.204"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TimeSchedule;

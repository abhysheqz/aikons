import React from "react";
const Minimize_01: React.FC<
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
        d="M12.828 4.43A2.45 2.45 0 0 1 15.2 2.624c1.53 0 2.714 1.38 2.404 2.896l-.88 4.313c1.658.227 3.59.885 5.24 2.463.95.908 1.006 2.243.834 3.338-.178 1.127-.631 2.242-1.005 2.982-.12.203-.601 1.054-.703 1.246-.216.41-.323.725-.323.975 0 .23 0 .465-.013.642-.014.191-.046.4-.14.612a1.75 1.75 0 0 1-.88.88c-.211.094-.42.126-.612.14-.177.013-.389.013-.619.013h-5.751c-.272 0-.523 0-.732-.018a1.8 1.8 0 0 1-.716-.2 1.5 1.5 0 0 1-.349-.252c-.23-.215-.364-.518-.461-.764a25 25 0 0 1-.398-1.155c-.106-.282-.298-.537-.899-1.291L5.92 15.332a2.38 2.38 0 0 1-.007-3.021 2.46 2.46 0 0 1 3.446-.349l1.604 1.092zM10.832 1.168a1 1 0 0 0-1.414 0L8.386 2.2l-.543-.543a1 1 0 0 0-1.746.584l-.115 1.452a7 7 0 0 0-.033.855c.016.292.09.717.438 1.065s.773.42 1.065.437c.258.015.566-.01.854-.033l1.452-.114a1 1 0 0 0 .672-1.659l-.63-.63 1.032-1.032a1 1 0 0 0 0-1.414M3.944 5.733l-1.453.115a1 1 0 0 0-.584 1.745l.542.543-1.031 1.032a1 1 0 0 0 1.414 1.414l1.032-1.031.63.63a1 1 0 0 0 1.659-.67l.114-1.453c.023-.289.047-.597.033-.855-.016-.292-.089-.717-.437-1.066-.349-.348-.774-.42-1.066-.437-.258-.014-.565.01-.853.033"
      />
    </svg>
  );
};
export default Minimize_01;

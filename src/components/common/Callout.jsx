import cc from "classcat";

export default function Callout({ children, ...props }) {
  return (
    <div
      {...props}
      className={cc([
        "rounded-lg border-2 border-primary bg-secondary-light p-5",
        props.className,
      ])}
    >
      {children}
    </div>
  );
}

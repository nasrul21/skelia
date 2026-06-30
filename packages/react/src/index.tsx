import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type SkeletonAnimation = "shimmer" | "pulse" | "wave" | "none";

type SkeletonProps<T extends ElementType = "div"> = {
  as?: T;
  animation?: SkeletonAnimation;
  children?: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function Skeleton<T extends ElementType = "div">({
  as,
  animation = "shimmer",
  className,
  children,
  ...props
}: SkeletonProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cx("sk", `sk-${animation}`, className)}
      aria-hidden={props["aria-hidden" as keyof typeof props] ?? true}
      {...props}
    >
      {children}
    </Component>
  )
}

export function SkeletonLine({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return <div className={cx("sk-line", className)} {...props} />
}

export function SkeletonBox({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return <div className={cx("sk-box", className)} {...props} />
}

export function SkeletonCircle({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return <div className={cx("sk-circle", className)} {...props} />
}

export function SkeletonAvatar({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return <div className={cx("sk-avatar", className)} {...props} />
}

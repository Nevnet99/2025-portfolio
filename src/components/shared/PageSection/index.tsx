"use client";

import React from "react";
import styles from "./PageSection.module.css";
import clsx from "clsx";

export type PageSectionProps = {
  as?: "div" | "section" | "article" | "aside" | "header" | "footer";
  children: React.ReactNode;
  className?: string;
  withPadding?: boolean;
};

export const PageSection = ({
  as = "div",
  children,
  className,
  withPadding = false,
}: PageSectionProps) => {
  const Component = as;

  return (
    <Component
      className={clsx(
        className,
        styles.section,
        withPadding && styles.withPadding
      )}
    >
      {children}
    </Component>
  );
};

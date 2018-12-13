import React from 'react'

const styles = require('./button.module.css')

export enum Kind {
  Default = 'Default',
  Icon = 'Icon',
}

type ReactButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

type DefaultButtonProps = ReactButtonProps & {
  kind?: Kind.Default
}

type IconButtonProps = ReactButtonProps & {
  kind: Kind.Icon
  label: string
}

export default function Button(props: DefaultButtonProps | IconButtonProps) {
  switch (props.kind) {
    case Kind.Icon:
      return (
        <button
          aria-label={props.label}
          {...props}
          className={`${styles.iconButton} ${props.className}`}
        />
      )
    default:
      return (
        <button {...props} className={`${styles.button} ${props.className}`} />
      )
  }
}

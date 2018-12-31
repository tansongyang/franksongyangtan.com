import React from 'react'
import ReactModal from 'react-modal'

import Button, { Kind as ButtonKind } from './button'

const styles = require('./modal.module.css')

export type Props = Exclude<ReactModal.Props, 'style'> & {
  children: React.ReactChild | React.ReactChild[]
  childrenRef?: (ref: HTMLElement) => void
  footer: React.ReactChild | React.ReactChild[]
}

export default function Modal(props: Props) {
  return (
    <ReactModal {...props} className={styles.modal}>
      <div className={styles.headerRow}>
        <h2 className={styles.heading}>{props.contentLabel}</h2>
        <Button
          className={styles.closeButton}
          kind={ButtonKind.Icon}
          label="Close"
          onClick={props.onRequestClose as any}
        >
          🗙
        </Button>
      </div>
      <div className={styles.children} ref={props.childrenRef}>
        {props.children}
      </div>
      <div className={styles.footerRow}>{props.footer}</div>
    </ReactModal>
  )
}

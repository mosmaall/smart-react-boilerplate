import styled, { css } from 'styled-components'

import theme from '../theme'

export const supportLayoutProps = css`
  ${props =>
    props.mt
      ? typeof props.mt === 'boolean'
        ? `&&{margin-top: ${props.defaultmargin || theme().dimens.md}};`
        : `&&{margin-top: ${props.mt}}`
      : null}
  ${props =>
    props.mb
      ? typeof props.mb === 'boolean'
        ? `&&{margin-bottom: ${props.defaultmargin || theme().dimens.md}};`
        : `&&{margin-bottom: ${props.mb}}`
      : null}
  ${props =>
    props.ml
      ? typeof props.ml === 'boolean'
        ? `&&{margin-left: ${props.defaultmargin || theme().dimens.md}};`
        : `&&{margin-left: ${props.ml}};`
      : null}
  ${props =>
    props.mr
      ? typeof props.mr === 'boolean'
        ? `&&{margin-right: ${props.defaultmargin || theme().dimens.md}}`
        : `&&{margin-right: ${props.mr}}`
      : null}
  ${props =>
    props.m
      ? typeof props.m === 'boolean'
        ? `&&{margin: ${props.defaultmargin || theme().dimens.md}}`
        : `&&{margin: ${props.m}}`
      : null}
  ${props =>
    props.pt
      ? typeof props.pt === 'boolean'
        ? `&&{padding-top: ${props.defaultpadding || theme().dimens.md}}`
        : `&&{padding-top: ${props.pt}}`
      : null}
  ${props =>
    props.pb
      ? typeof props.pb === 'boolean'
        ? `&&{padding-bottom: ${props.defaultpadding || theme().dimens.md}}`
        : `&&{padding-bottom: ${props.pb}}`
      : null}
  ${props =>
    props.pl
      ? typeof props.pl === 'boolean'
        ? `&&{padding-left: ${props.defaultpadding || theme().dimens.md}}`
        : `&&{padding-left: ${props.pl}}`
      : null}
  ${props =>
    props.pr
      ? typeof props.pr === 'boolean'
        ? `&&{padding-right: ${props.defaultpadding || theme().dimens.md}}`
        : `&&{padding-right: ${props.pr}}`
      : null}
  ${props =>
    props.p
      ? typeof props.p === 'boolean'
        ? `&&{padding: ${props.defaultpadding || theme().dimens.md}}`
        : `&&{padding: ${props.p}}`
      : null}
`

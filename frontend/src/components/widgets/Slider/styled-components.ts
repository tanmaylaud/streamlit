/**
 * @license
 * Copyright 2018-2021 Streamlit Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import styled from "@emotion/styled"
import { transparentize } from "color2k"

export interface StyledThumbProps {
  isDisabled: boolean
}

export const StyledThumb = styled.div<StyledThumbProps>(
  ({ isDisabled, theme }) => ({
    alignItems: "center",
    backgroundColor: isDisabled ? theme.colors.gray : theme.colors.primary,
    borderTopLeftRadius: "100%",
    borderTopRightRadius: "100%",
    borderBottomLeftRadius: "100%",
    borderBottomRightRadius: "100%",
    borderTopStyle: "none",
    borderBottomStyle: "none",
    borderRightStyle: "none",
    borderLeftStyle: "none",
    boxShadow: "none",
    display: "flex",
    height: theme.radii.xl,
    justifyContent: "center",
    width: theme.radii.xl,
    ":focus": {
      boxShadow: `0 0 0 0.2rem ${transparentize(theme.colors.primary, 0.5)}`,
      outline: "none",
    },
  })
)

export const StyledThumbValue = styled.div<StyledThumbProps>(
  ({ isDisabled, theme }) => ({
    fontFamily: theme.fonts.mono,
    fontSize: theme.fontSizes.smDefault,
    paddingBottom: theme.fontSizes.twoThirdSmDefault,
    color: isDisabled ? theme.colors.gray : theme.colors.primary,
    top: "-22px",
    position: "absolute",
    whiteSpace: "nowrap",
    backgroundColor: theme.colors.transparent,
    lineHeight: theme.lineHeights.base,
    fontWeight: "normal",
  })
)

export const StyledTickBar = styled.div(({ theme }) => ({
  paddingBottom: theme.spacing.none,
  paddingLeft: theme.spacing.none,
  paddingRight: theme.spacing.none,
  paddingTop: theme.fontSizes.twoThirdSmDefault,
  justifyContent: "space-between",
  alignItems: "center",
  display: "flex",
}))

export const StyledTickBarItem = styled.div(({ theme }) => ({
  lineHeight: theme.lineHeights.base,
  fontWeight: "normal",
  fontSize: theme.fontSizes.smDefault,
  fontFamily: theme.fonts.mono,
}))

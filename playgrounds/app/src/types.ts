export interface User {
  id: string
  email: string
  githubId: string
  githubUsername: string
  githubAvatarUrl: string
}

export interface Snippet {
  id: string
  userId: string
  title: string
  codeLeft: string
  codeRight: string
  createdAt: number
  updatedAt: number
  snippetWidth: number
  yPadding: number
  xPadding: number
  shadowEnabled: boolean
  shadowOffsetY: number
  shadowBlur: number
  shadowColor: string
  shadowOpacity: number
  bgColor: string
  language: string
  theme: string
  fontSize: number
  fontFamily: string
}

export interface AnimationFrameLayout {
  yPadding: number
  xPadding: number
}

export interface AnimationFrameShadow {
  shadowEnabled: boolean
  shadowOffsetY: number
  shadowBlur: number
  shadowColor: string
  shadowOpacity: number
}

export interface AnimationFrameStyling {
  fontSize: string
  fontFamily: string
  snippetBackgroundColor: string
  backgroundColor: string
}

export interface AnimationFrameConfig {
  layout: AnimationFrameLayout
  shadow: AnimationFrameShadow
  styling: AnimationFrameStyling
}

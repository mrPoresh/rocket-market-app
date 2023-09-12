export enum ButtonType {
    Event = 'btn-event',
    Link = 'btn-link',
    Icon = 'btn-icon',
}

export enum ButtonSize {
    Small = 'btn-sm',
    Medium = 'btn-md',
    Large = 'btn-lg',
    IconSm = 'btn-icon-sm'
}

export enum ButtonStyle {
    Accent = 'btn-accent',
    Primary = 'btn-primary',
    Default = 'btn-default',
    Warn = 'btn-warn',
    Icon = 'btn-icon',
}

export enum ButtonTitleStyle {
    Small = 'btn-title-sm',
    Medium = 'btn-title-md',
    Large = 'btn-title-lg',
}

export interface ButtonDef {
    id: string,
    buttonType: string,
    size: string,
    style: string,
    title?: string,
    titleStyle?: string,
}

export interface ButtonsGroup {
    direction: string,
    buttonsGroup: ButtonDef[],
}
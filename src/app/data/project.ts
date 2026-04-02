export interface Project {
    name: string,
    type: ProjectType,
    description: string,
    source?: string,
    completed: boolean,
    links?: Link[]
}

export enum ProjectType {
    MinecraftMod = "minecraft_mod"
}

export interface Link {
    url: string,
    provider: ProviderType,
}

export enum ProviderType {
    Modrinth = "Modrinth",
    CurseForge = "CurseForge"
}
export interface SharedSettings {
    server: string,
    botty: {
        prefix: string,
        nickname: string
    }
    channelAccess: {
        forcedChannels: string[],
        restrictedChannels: string[],
        commands: string[]
    },
    uptimeSettings: {
        checkInterval: number,
        commands: string[]
    },
    techBlog: {
        checkInterval: number,
        channel: string,
        url: string
    },
    keyFinder: {
        reportChannel: string
    },
    forum: {
        checkInterval: number,
        channel: string,
        url: string
    }
    honeypot: {
        reportChannel: string;
    },
    autoReact: {
        emoji: string,
        commands: string[]
    },
    info: {
        allowedRoles: string[],
        command: string
    },
    officehours: {
        allowedRoles: string[],
        commands: string[],
        openMessage: string,
        closeMessage: string,
        addedMessage: string,
        removedMessage: string
    },
    riotApiLibraries: {
        commands: string[],
        noLanguage: string,
        languageList: string,
        githubError: string,
        baseURL: string
    },
    versionChecker: {
        checkInterval: number,
        channel: string,
        gameThumbnail: string,
        dataDragonThumbnail: string
    },
    logger: {
        server: string,
        errorChannel: string
        logChannel: string
    },
    apiStatus: {
        checkInterval: number,
        apiOnFireThreshold: number,
        statusUrl: string,
        command: string,
        commands: string[],
        onFireImages: string[]
    },
    onJoin: {
        messageFile: string
    }
}
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'
import { APP_BASE_HREF } from '@angular/common'
import { CommonEngine } from '@angular/ssr'
import express from 'express'
import bootstrap from './src/main.server'

export function app(): express.Express {
    const commonEngine: CommonEngine = new CommonEngine()
    const server: express.Express = express()
    const serverDistFolder = dirname(fileURLToPath(import.meta.url))
    const browserDistFolder = resolve(serverDistFolder, '../browser')
    const indexHtml = join(serverDistFolder, 'index.server.html')

    // prepare view engine
    server.set('view engine', 'html')
    server.set('views', browserDistFolder)

    // serve static files
    server.get('*.*', express.static(browserDistFolder, { maxAge: '1y' }))

    // serve app routes
    server.get('*', (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const { protocol, originalUrl, baseUrl, headers } = req

        commonEngine
            .render({
                bootstrap,
                documentFilePath: indexHtml,
                url: `${protocol}://${headers.host}${originalUrl}`,
                publicPath: browserDistFolder,
                providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
            })
            .then((html: string) => res.send(html))
            .catch(err => next(err))
    })

    return server
}

import 'zone.js/node'
import { APP_BASE_HREF } from '@angular/common'
import { CommonEngine } from '@angular/ssr'
import * as express from 'express'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import bootstrap from './src/main.server'

export default bootstrap

export function app(): express.Express {
    const commonEngine: CommonEngine = new CommonEngine()
    const server: express.Express = express()
    const distFolder: string = join(process.cwd(), 'dist/docker-traefik-errors/browser')
    const indexHtml: string = existsSync(join(distFolder, 'index.original.html'))
        ? join(distFolder, 'index.original.html')
        : join(distFolder, 'index.html')

    // prepare view engine
    server.set('view engine', 'html')
    server.set('views', distFolder)

    // serve static files
    server.get('*.*', express.static(distFolder, { maxAge: '1y' }))

    // serve app routes
    server.get('*', (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const { protocol, originalUrl, baseUrl, headers } = req

        commonEngine
            .render({
                bootstrap,
                documentFilePath: indexHtml,
                url: `${protocol}://${headers.host}${originalUrl}`,
                publicPath: distFolder,
                providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
            })
            .then((html: string) => res.send(html))
            .catch(err => next(err))
    })

    return server
}

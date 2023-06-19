import 'zone.js/node'
import { APP_BASE_HREF } from '@angular/common'
import { ngExpressEngine } from '@nguniversal/express-engine'
import * as express from 'express'
import { existsSync } from 'fs'
import { join } from 'path'
import { AppServerModule } from './src/main.server'

export * from './src/main.server'

export function app(): express.Express {
    const server: express.Express = express()
    const distFolder: string = join(process.cwd(), 'dist/pascaliske-dev/browser')
    const indexHtml: string = existsSync(join(distFolder, 'index.original.html'))
        ? 'index.original.html'
        : 'index'

    // prepare view engine
    server.engine('html', ngExpressEngine({ bootstrap: AppServerModule }))
    server.set('view engine', 'html')
    server.set('views', distFolder)

    // serve static files
    server.get('*.*', express.static(distFolder, { maxAge: '1y' }))

    // serve app routes
    server.get('*', (req: express.Request, res: express.Response) => {
        res.render(indexHtml, {
            req,
            providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
        })
    })

    return server
}

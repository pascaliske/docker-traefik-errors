import 'zone.js/dist/zone-node'
import { join } from 'path'
import { existsSync } from 'fs'
import * as express from 'express'
import { APP_BASE_HREF } from '@angular/common'
import { ngExpressEngine } from '@nguniversal/express-engine'
import { AppServerModule } from './src/main.server'

export function app(): express.Express {
    const server = express()
    const distFolder = join(process.cwd(), 'dist/docker-traefik-errors/browser')
    const indexHtml = existsSync(join(distFolder, 'index.original.html'))
        ? 'index.original.html'
        : 'index'

    server.engine('html', ngExpressEngine({ bootstrap: AppServerModule }))
    server.set('view engine', 'html')
    server.set('views', distFolder)

    server.get('*.*', express.static(distFolder, { maxAge: '1y' }))
    server.get('*', (req, res) => {
        res.render(indexHtml, {
            req,
            providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
        })
    })

    return server
}

function run(): void {
    const port = process.env.PORT ?? 4000
    const server = app()

    server.listen(port, () => {
        console.info(`Node Express server listening on http://localhost:${port}`)
    })
}

/* eslint-disable no-underscore-dangle, camelcase, no-undef */
declare const __non_webpack_require__: NodeRequire
const mainModule = __non_webpack_require__.main
const moduleFilename = mainModule?.filename ?? ''
/* eslint-enable no-underscore-dangle, camelcase, no-undef */

// ensure that the server is run only when not required
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
    run()
}

export * from './src/main.server'

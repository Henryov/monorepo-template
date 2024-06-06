import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

export function setupSwagger(app: INestApplication) {

    const config = new DocumentBuilder()
        .setTitle('Monorepo Template BackEnd')
        .build()

    const document = SwaggerModule.createDocument(app, config, {
        operationIdFactory: (controllerKey: string, methodKey: string) => methodKey
    })
    SwaggerModule.setup('api', app, document)
    // 访问该链接获取JSON文件 http://localhost:3000/api-json

    console.log('Swagger document running at http://localhost:3000/api')
}
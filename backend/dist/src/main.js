"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix("api");
    const allowedOrigins = [
        "http://localhost:3000",
        process.env.FRONTEND_URL?.replace(/\/$/, ""),
    ].filter((origin) => Boolean(origin));
    app.enableCors({
        origin(origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
                return;
            }
            callback(new Error("Origin is not allowed by CORS"), false);
        },
        methods: ["GET", "POST", "OPTIONS"],
        allowedHeaders: ["Content-Type"],
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
    }));
    const port = Number(process.env.PORT ?? 4000);
    await app.listen(port, "0.0.0.0");
    console.log(`DevScope API running on port ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map
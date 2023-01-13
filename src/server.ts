import serverless from "serverless-http"
import express, { Request, Response } from "express"
export const app = express()

app.get("/", (req: Request, res: Response) => {
    res.status(200).send({ working: true })
});

export const handler = serverless(app)


import serverless from "serverless-http"
import express, { Request, Response } from "express"
import moviesRoute from "./routes/moviesRoute";
import animalsRoute from "./routes/animalsRoute";

export const app = express()

app.use("/movies", moviesRoute)
app.use("/animals", animalsRoute)

app.get("/", (req: Request, res: Response) => {
    res.json({
        working: true,
        message: `Hello World`,
        secret: `SECRET: ${process.env.SECRET} 🤫`
    })
});

export const handler = serverless(app)


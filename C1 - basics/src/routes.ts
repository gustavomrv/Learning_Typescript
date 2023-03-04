import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
    CreateCourseService.execute({
        name: "NodeJS",
        duration: 5,
        educator: "Gus"
    })

    return response.send()
}
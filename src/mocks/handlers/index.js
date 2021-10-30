import { rest } from "msw"
import { students } from "../data/students"
import { groups } from "../data/groups"
import { decodeString } from "../../helpers/decodeString"

export const handlers = [
   rest.get('/groups', (req, res, ctx) => {
      return res(
         ctx.status(200),
         ctx.json({
            groups,
         })
      )
   }),

   rest.get('/students/:group', (req, res, ctx) => {
      if(req.params.group){
         const matchingStudents = students.filter(student => student.group === req.params.group)
         return res(
            ctx.status(200),
            ctx.json({
               students: matchingStudents,
            })
         )
      }

      return res(
         ctx.status(200),
         ctx.json({
            students,
      })) 
   }),

   rest.get('/student/:inputValue', (req, res, ctx) => {
      if(req.params.inputValue){
         const matchingStudents = students.filter(student => decodeString(student.name.toLowerCase().replace(/\s/g, '')).includes(req.params.inputValue.toLowerCase()))
         return res(
            ctx.status(200),
            ctx.json({
               students: matchingStudents,
            })
         )
      }
   })
]